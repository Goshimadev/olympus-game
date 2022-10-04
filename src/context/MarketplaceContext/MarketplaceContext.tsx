import { noop, sortBy } from "lodash";
import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { ERoute, ESortOption, priceOptions } from "src/constants";
import { collection, data } from "src/data";
import { IFilter, IMarketItem, IOption } from "src/interfaces";

interface IMarketplaceContextProps {
    filters: IFilter
    setFilters: React.Dispatch<React.SetStateAction<IFilter>>
    marketItems: IMarketItem[]
    setMarketItems: React.Dispatch<React.SetStateAction<IMarketItem[]>>
    myCollection: IMarketItem[]
    setMyCollection: React.Dispatch<React.SetStateAction<IMarketItem[]>>
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    sortOption: IOption
    setSortOption: React.Dispatch<React.SetStateAction<IOption>>
    filterMarketItems: () => void
    filterCollectionItems: () => void
    getCollectionById: (id: string) => IMarketItem
    handleSetSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DEFAULT_FILTERS: IFilter = {
    category: [],
    rarity: [],
    level: {
        from: 1,
        to: 7
    },
    priceRange: {
        from: 0,
        to: 0
    }
}

export const MarketplaceContext = createContext<IMarketplaceContextProps>({
    filters: DEFAULT_FILTERS,
    setFilters: noop,
    marketItems: [],
    setMarketItems: noop,
    myCollection: [],
    setMyCollection: noop,
    searchTerm: '',
    setSearchTerm: noop,
    sortOption: priceOptions[0],
    setSortOption: noop,
    filterMarketItems: noop,
    filterCollectionItems: noop,
    getCollectionById: () => null,
    handleSetSearchTerm: noop
})

type TFilterFunction = (marketItems: IMarketItem[], filters: IFilter, setFilters?: React.Dispatch<React.SetStateAction<IFilter>>) => IMarketItem[]

const getItemsByCategory: TFilterFunction = (marketItems, filters) => {
    if (!filters.category || filters.category.length === 0) {
        return marketItems
    }

    return marketItems.filter(marketItem => {
        return filters.category.includes(marketItem.category)
    })
}

const getItemsByRarity: TFilterFunction = (marketItems, filters) => {
    if (!filters.rarity || filters.rarity.length === 0) {
        return marketItems
    }

    return marketItems.filter(marketItem => {
        return filters.rarity.includes(marketItem.rarity)
    })
}

const getItemsByLevel: TFilterFunction = (marketItems, filters) => {
    if (!filters.level || !filters.level.from || !filters.level.to) {
        return marketItems
    }

    return marketItems.filter(marketItem => {
        if (!marketItem.level) {
            return marketItem
        }

        return filters.level.from <= marketItem.level && filters.level.to >= marketItem.level
    })
}

const getItemsByPrice: TFilterFunction = (marketItems, filters, setFilters) => {
    if (!filters.priceRange || (!filters.priceRange.from && !filters.priceRange.to)) {
        return marketItems
    }

    if (filters.priceRange.from > filters.priceRange.to) {
        setFilters(filters => {
            return {
                ...filters,
                priceRange: DEFAULT_FILTERS.priceRange
            }
        })

        return marketItems
    }

    return marketItems.filter(marketItem => {
        if (!marketItem.price) {
            return marketItems
        }

        return filters.priceRange.from <= marketItem.price && filters.priceRange.to >= marketItem.price
    })
}

export const MarketplaceContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [ filters, setFilters ] = useState<IFilter>(DEFAULT_FILTERS)
    const [ marketItems, setMarketItems ] = useState<IMarketItem[]>(data)
    const [ myCollection, setMyCollection ] = useState<IMarketItem[]>(collection)
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ sortOption, setSortOption ] = useState<IOption>(priceOptions[0])

    const originalMarketItemsRef = useRef(data)
    const originalCollectionItemsRef = useRef(collection)

    const location = useLocation()

    useEffect(() => {
        setMarketItems(marketItems => {
            switch (sortOption.value) {
                case ESortOption.HIGHEST_PRICE:
                    return sortBy(marketItems, (x) => -x.price)

                case ESortOption.LOWEST_PRICE:
                    return sortBy(marketItems, (x) => x.price)

                default:
                    return marketItems
            }
        })
    }, [ setMarketItems, sortOption ])
    
    const getCollectionById = useCallback((id: string) => {
        return myCollection.find(x => x.id === id)
    }, [ myCollection ])

    const filterMarketItems = useCallback(() => {
        const itemsByCategory = getItemsByCategory(originalMarketItemsRef.current, filters)
        const itemsByRarity = getItemsByRarity(itemsByCategory, filters)
        const itemsByLevel = getItemsByLevel(itemsByRarity, filters)
        const itemsByPrice = getItemsByPrice(itemsByLevel, filters, setFilters)

        setMarketItems(itemsByPrice)

    }, [ filters, setMarketItems, originalMarketItemsRef ])

    const filterCollectionItems = useCallback(() => {
        const collectionByCategory = getItemsByCategory(originalCollectionItemsRef.current, filters)
        const collectionByRarity = getItemsByRarity(collectionByCategory, filters)
        const collectionByLevel = getItemsByLevel(collectionByRarity, filters)
        const collectionByPrice = getItemsByPrice(collectionByLevel, filters, setFilters)

        setMyCollection(collectionByPrice)

    }, [ filters, setMyCollection, originalCollectionItemsRef ])

    const handleSetSearchTerm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }, [ setSearchTerm ])

    useEffect(() => {
        if (!location.pathname.includes(ERoute.MARKET)) {
            setFilters(DEFAULT_FILTERS)
            setMarketItems(originalMarketItemsRef.current)
            setMyCollection(originalCollectionItemsRef.current)
        }
        
        setSearchTerm('')
    }, [ location, setFilters, setSearchTerm ])

    return (
        <MarketplaceContext.Provider 
            value={{
                filters,
                setFilters,
                marketItems,
                setMarketItems,
                myCollection,
                setMyCollection,
                searchTerm,
                setSearchTerm,
                sortOption,
                setSortOption,
                filterMarketItems,
                filterCollectionItems,
                getCollectionById,
                handleSetSearchTerm
            }}
        >
            {children}
        </MarketplaceContext.Provider>
    )
}