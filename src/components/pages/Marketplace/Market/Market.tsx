import React, { useCallback, useContext, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { CustomDropdown } from 'src/components/CustomDropdown/CustomDropdown';
import { FilterMenu } from 'src/components/FilterMenu/FilterMenu';
import { Info } from 'src/components/Info/Info';
import { ERoute, priceOptions } from 'src/constants';
import { MarketplaceContext } from 'src/context/MarketplaceContext/MarketplaceContext';
import { data } from "src/data";

import './Market.scss';

interface IMarketProps {}

export const Market: React.FC<IMarketProps> = () => {
    const { sortOption, setSortOption } = useContext(MarketplaceContext)
    const [ isOpen, setIsOpen ] = useState(false)

    const smallScreen = matchMedia('(max-width: 690px)')

    const handleOpenFilters = useCallback(() => {
        setIsOpen(isOpen => !isOpen)
    }, [ setIsOpen ])

    const handleCloseMobileFilter = useCallback(() => {
        setIsOpen(false)
    }, [ setIsOpen ])

    return (
        <div className='market'>
            <div className='market__header'>
                <div className='market__header-info'>
                    <Info
                        className='market__info'
                        hasGradient
                        links={[
                            {
                                name: `all items (${data.length})`, 
                                route: ERoute.ALL_ITEMS
                            },
                            {
                                name: `sale (${data.filter(item => item.type === 'sale').length})`, 
                                route: ERoute.MARKET_SALE
                            },
                            {
                                name: `auction (${data.filter(item => item.type === 'auction').length})`, 
                                route: ERoute.AUCTION
                            },
                            {
                                name: `past auctions (${data.filter(item => item.pastAuction).length})`, 
                                route: ERoute.PAST_AUCTIONS
                            }
                        ]}
                    />
                </div>
                {!smallScreen.matches &&
                    <div className='market__header-dropdown'>
                        <div className='market__dropdown-label'>Sort by:</div>
                        <CustomDropdown 
                            className='market__dropdown'
                            value={sortOption} 
                            options={priceOptions}
                            onChange={setSortOption} 
                            mode='market'
                        />
                    </div>
                }
            </div>
            {smallScreen.matches &&
                <div className='market__filters-wrapper'>
                    <div className='market__filter' onClick={handleOpenFilters}>
                        {isOpen ? <IoIosArrowUp className="dropdown__icon"/> : <IoIosArrowDown className="dropdown__icon" />}
                        Filter
                    </div>

                    <div className='market__header-dropdown'>
                        <div className='market__dropdown-label'>Sort by:</div>
                        <CustomDropdown 
                            className='market__dropdown'
                            value={sortOption} 
                            options={priceOptions}
                            onChange={setSortOption} 
                            mode='market'
                        />
                    </div>
                </div>
            }
            {isOpen ?
                <FilterMenu closeMobileFilter={handleCloseMobileFilter} /> : <Outlet />
            }
            <div 
                className="market__filter-line"
                style={{display: smallScreen.matches ? 'block' : 'none'}}
            ></div>
        </div>
    )
}