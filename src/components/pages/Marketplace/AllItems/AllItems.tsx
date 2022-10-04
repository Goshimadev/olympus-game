import React, { useContext } from "react";
import { MarketCard } from "src/components/MarketCard/MarketCard";
import { NotFound } from "src/components/NotFound/NotFound";
import { MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";

import './AllItems.scss';

interface IAllItemsProps {}

export const AllItems: React.FC<IAllItemsProps> = () => {
    const { marketItems, searchTerm } = useContext(MarketplaceContext)

    return (
        <div className="all-items">
            {marketItems.length === 0 && <NotFound />}
            {marketItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
                return (
                    <MarketCard
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        collection={item.collection}
                        price={item.price}
                        rarity={item.rarity}
                        category={item.category}
                        image={item.image}
                        type={item.type}
                    />
                )
            })}
        </div>
    )
}