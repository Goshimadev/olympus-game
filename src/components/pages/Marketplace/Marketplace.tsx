import React, { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ERoute } from "src/constants";
import { MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";

import "./Marketplace.scss";

interface IMarketplaceProps {}

export const Marketplace: React.FC<IMarketplaceProps> = () => {
    const { searchTerm, handleSetSearchTerm } = useContext(MarketplaceContext)

    const location = useLocation()

    return (
        <div className="marketplace">
            <div className="marketplace__header">
                <div className="marketplace__header-links">
                    <NavLink 
                        className={() => {
                            return location.pathname.includes(ERoute.MARKET)
                                ? 'marketplace__header-link active' : 'marketplace__header-link' 
                        }}
                        to={ERoute.ALL_ITEMS}
                    >
                        Marketplace
                    </NavLink>
                    <NavLink 
                        className="marketplace__header-link"
                        to={ERoute.COLLECTION}
                    >
                        My collection
                    </NavLink>
                </div>
                <div className="marketplace__header-search">
                    <input 
                        className="marketplace__header-input" 
                        name="marketplace_search"
                        type="text" 
                        placeholder="Search" 
                        onChange={handleSetSearchTerm}
                        value={searchTerm || ''}
                        maxLength={20}
                    />
                </div>
            </div>
            <Outlet />
        </div>
    )
}