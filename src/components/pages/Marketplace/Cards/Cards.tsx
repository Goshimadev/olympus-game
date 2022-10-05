import React from 'react';
import { MarketCard } from 'src/components/MarketCard/MarketCard';
import { IMarketItem } from 'src/interfaces';
import './Cards.scss';

interface ICardsProps {
    itemsList: IMarketItem[],
    searchTerm?: string
}

export const Cards: React.FC<ICardsProps> = ({ itemsList, searchTerm }) => {
    return (
        <div className='cards'>
            {itemsList.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
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