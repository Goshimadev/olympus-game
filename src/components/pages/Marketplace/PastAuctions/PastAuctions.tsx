import React, { useContext } from "react";
import { NotFound } from "src/components/NotFound/NotFound";
import { MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";
import { Cards } from "../Cards/Cards";
import "./PastAuctions.scss";

interface IPastAuctionsProps {}

export const PastAuctions: React.FC<IPastAuctionsProps> = () => {
    const { marketItems, searchTerm } = useContext(MarketplaceContext)

    return (
        <div className="past-auctions">
            {marketItems.length === 0 && <NotFound />}
            <Cards
                itemsList={marketItems}
                searchTerm={searchTerm}
            />
        </div>
    )
}