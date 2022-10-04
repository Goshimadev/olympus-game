import React, { useCallback, useContext } from "react";
import { BigButton } from "../BigButton/BigButton";
import { IoIosArrowBack } from 'react-icons/io'
import './FilterMenu.scss';
import { FilterOption } from "./FilterOption/FilterOption";
import { allCategories, ECategory, ERarity, ERoute } from "src/constants";
import { isEqual } from "lodash";
import { FilterSlider } from "./FilterSlider/FilterSlider";
import { FilterPrice } from "./FilterPrice/FilterPrice";
import { DEFAULT_FILTERS, MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";
import { useLocation, useNavigate } from "react-router";

interface IFilterMenuProps {
    closeMobileFilter?: () => void
}

export const FilterMenu: React.FC<IFilterMenuProps> = ({ closeMobileFilter }) => {
    const { filters, setFilters, filterMarketItems, filterCollectionItems } = useContext(MarketplaceContext)

    const navigate = useNavigate()
    const location = useLocation()
    const smallScreen = matchMedia('(max-width: 690px)')

    const handleSetCategoryFilter = useCallback((x: string) => {
        setFilters(filters => {

            return {
                ...filters, 
                category: filters.category.includes(x) 
                    ? filters.category.filter(item => item !== x)
                    : [...filters.category, x]
            }
        })
    }, [ setFilters ])

    const handleSetRarityFilter = useCallback((x: string) => {
        setFilters(filters => {
            return {
                ...filters, 
                rarity: filters.rarity.includes(x) 
                    ? filters.rarity.filter(item => item !== x)
                    : [...filters.rarity, x]
            }
        })
    }, [ setFilters ])

    const handleClearAllFilters = useCallback(() => {
        setFilters(DEFAULT_FILTERS)
    }, [ setFilters ])

    const handleShowAllFilter = useCallback(() => {
        setFilters(filters => {
            return {
                ...filters,
                category: isEqual(filters.category, allCategories) ? [] : allCategories
            }
        })

    }, [ setFilters ])

    const handleSetLevelFilter = useCallback((from: number, to: number) => {
        setFilters(filters => {
            return {
                ...filters,
                level: {
                    from, 
                    to
                }
            }
        })
    }, [ setFilters ])

    const handleSetPricefilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const pattern = /^(|\d)+$/g

        if (!e.target.value.match(pattern)) {
            e.preventDefault()

            return
        }

        setFilters(filters => {
            if (!filters.priceRange.from && e.target.name === "to") {
                return {
                    ...filters,
                    priceRange: {
                        to: parseInt(e.target.value),
                        from: 1
                    }
                    
                }
            }

            return {
                ...filters,
                priceRange: {
                    ...filters.priceRange,
                    [e.target.name]: parseInt(e.target.value) || ''
                }
                
            }
        })
    }, [ setFilters ])

    const handleChangeSideMenu = useCallback(() => {
        navigate(location?.state?.prevPath || ERoute.HOMEPAGE)
    }, [ navigate, location ])

    const handleApplyAllButton = useCallback(() => {
        if (location.pathname === ERoute.COLLECTION) {
            filterCollectionItems()
        } else {
            filterMarketItems()
        }

        closeMobileFilter()
    }, [ filterCollectionItems, filterMarketItems, closeMobileFilter, location.pathname ])

    return (
        <div className="filter-menu">
            {!smallScreen.matches && 
                <div className="filter-menu__button-wrapper">
                    <IoIosArrowBack className="filter-menu__arrow" />
                    <BigButton
                        className="filter-menu__button filter-menu__button_top" 
                        label="back"
                        onClick={handleChangeSideMenu}
                    />
                </div>
            }

            <div 
                className="filter-menu__line filter-menu__line_top"
                style={{display: smallScreen.matches ? 'none' : 'block'}}
            ></div>
            {!smallScreen.matches && 
                <div className="filter-menu__header">
                    <div className="filter-menu__header-filters">Filters</div>
                    <div 
                        className="filter-menu__header-clear"
                        onClick={handleClearAllFilters}
                    >
                        Clear All
                    </div>
                </div>
            }
            <div 
                className="filter-menu__line filter-menu__line_bottom"
                style={{display: smallScreen.matches ? 'none' : 'block'}}
            ></div>

            <div className="filter-menu__filters">
                <div className="filter-menu__filters-categories">
                    <div className="filter-menu__filters-title">Categories</div>
                    <div className="filter-menu__category">
                        <FilterOption 
                            className="filter-menu__category-option" 
                            name={ECategory.CHARACTERS} 
                            onClick={handleSetCategoryFilter}
                            isSelected={filters.category.includes(ECategory.CHARACTERS)}
                        />
                        <FilterOption 
                            className="filter-menu__category-option" 
                            name={ECategory.CHESTS} 
                            onClick={handleSetCategoryFilter}
                            isSelected={filters.category.includes(ECategory.CHESTS)}
                        />
                        <FilterOption 
                            className="filter-menu__category-option" 
                            name={ECategory.EVOLVING_STONES} 
                            onClick={handleSetCategoryFilter}
                            isSelected={filters.category.includes(ECategory.EVOLVING_STONES)}
                        />
                        <FilterOption 
                            className="filter-menu__category-option" 
                            name='show all' 
                            onClick={handleShowAllFilter}
                            isSelected={filters.category.includes(ECategory.CHARACTERS)
                                        && filters.category.includes(ECategory.CHESTS)
                                        && filters.category.includes(ECategory.EVOLVING_STONES)}
                        />
                    </div>
                </div>
                <div className="filter-menu__filters-rarity">
                    <div className="filter-menu__filters-title">Rarity</div>
                    <div className="filter-menu__rarity">
                        <FilterOption 
                            className="filter-menu__rarity-option" 
                            name={ERarity.COMMON}
                            onClick={handleSetRarityFilter}
                            isSelected={filters.rarity.includes(ERarity.COMMON)}
                        />
                        <FilterOption 
                            className="filter-menu__rarity-option" 
                            name={ERarity.GOLD}
                            onClick={handleSetRarityFilter}
                            isSelected={filters.rarity.includes(ERarity.GOLD)}
                        />
                        <FilterOption 
                            className="filter-menu__rarity-option" 
                            name={ERarity.DIAMOND}
                            onClick={handleSetRarityFilter}
                            isSelected={filters.rarity.includes(ERarity.DIAMOND)}
                        />
                    </div>
                </div>
                <div className="filter-menu__filters-level">
                    <div className="filter-menu__filters-title">Level</div>
                    <FilterSlider 
                        className="filter-menu__slider"
                        onChange={handleSetLevelFilter}
                        value={filters.level}
                    />
                </div>
                <div className="filter-menu__filters-price">
                    <div className="filter-menu__filters-title">Price Range</div>
                    <FilterPrice
                        className="filter-menu__price" 
                        value={filters.priceRange}
                        onChange={handleSetPricefilter}
                    />
                </div>
            </div>
            
            {smallScreen.matches
            ? <div className="filter-menu__buttons">
                <BigButton
                    className="filter-menu__button filter-menu__button_bottom" 
                    label="apply filters"
                    onClick={handleApplyAllButton}
                />
                <BigButton
                    className="filter-menu__button filter-menu__button_clear"
                    label="clear all"
                    onClick={handleClearAllFilters}
                />
            </div>

            : <BigButton
                className="filter-menu__button filter-menu__button_bottom" 
                label="apply filters"
                onClick={location.pathname === ERoute.COLLECTION ? filterCollectionItems : filterMarketItems}
            />
            
            }
        </div>
    )
}