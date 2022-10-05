import React, { useContext } from "react";
import { NotFound } from "src/components/NotFound/NotFound";
import { MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";
import { Cards } from "../Cards/Cards";

import './AllItems.scss';

interface IAllItemsProps {}

export const AllItems: React.FC<IAllItemsProps> = () => {
    const { marketItems, searchTerm } = useContext(MarketplaceContext)

    return (
        <div className="all-items">
            {marketItems.length === 0 && <NotFound />}
            <Cards
                itemsList={marketItems}
                searchTerm={searchTerm}
            />
        </div>
    )
}