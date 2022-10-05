import React, { useContext } from "react";
import { NotFound } from "src/components/NotFound/NotFound";
import { MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";
import { Cards } from "../Cards/Cards";
import "./MarketSale.scss";

interface IMarketSaleProps {}

export const MarketSale: React.FC<IMarketSaleProps> = () => {
    const { marketItems, searchTerm } = useContext(MarketplaceContext)  

    return (
        <div className="market-sale">
            {marketItems.length === 0 && <NotFound />}
            <Cards
                itemsList={marketItems}
                searchTerm={searchTerm}
            />
        </div>
    )
}