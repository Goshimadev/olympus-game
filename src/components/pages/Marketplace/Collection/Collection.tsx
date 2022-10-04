import { uniqueId } from 'lodash';
import React, { useContext } from 'react';
import { MarketCard } from 'src/components/MarketCard/MarketCard';
import { MarketplaceContext } from 'src/context/MarketplaceContext/MarketplaceContext';

import './Collection.scss';

interface ICollectionProps {}

export const Collection: React.FC<ICollectionProps> = () => {
    const { myCollection, searchTerm } = useContext(MarketplaceContext)

    return (
        <div className='collection'>
            {myCollection.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
                return (
                    <MarketCard
                        id={item.id}
                        key={uniqueId('coll_')}
                        name={item.name}
                        collection={item.collection}
                        price={item.price}
                        rarity={item.rarity}
                        category={item.category}
                        image={item.image}
                    />
                )
            })}
        </div>
    )
}