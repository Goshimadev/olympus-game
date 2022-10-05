import React, { useContext } from "react";
import { NotFound } from "src/components/NotFound/NotFound";
import { MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";
import { Cards } from "../Cards/Cards";
import "./Auction.scss";

interface IAuctionProps {}

export const Auction: React.FC<IAuctionProps> = () => {
    const { marketItems, searchTerm } = useContext(MarketplaceContext)

    return (
        <div className="auction">
            {marketItems.length === 0 && <NotFound />}
            <Cards
                itemsList={marketItems}
                searchTerm={searchTerm}
            />
        </div>
    )
}