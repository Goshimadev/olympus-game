import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ECategory, ERoute } from "src/constants";

import './MarketCard.scss';

interface IMarketCardProps {
    id: string
    name: string
    collection: number
    price: number
    rarity: string
    category: string
    image: string
    type?: string
}

export const MarketCard: React.FC<IMarketCardProps> = ({ 
    id, 
    name, 
    collection, 
    price, 
    rarity, 
    category, 
    image
}) => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleNavigateToItemInfo = useCallback(() => {
        navigate(ERoute.ITEM_INFO.replace(":id", id), {
            "state" : {
                prevPath: location.pathname
            }
        })
    }, [ navigate, id, location ])

    return (
        <div 
            className={`market-card market-card_${category === 'evolving_stones' ? 'stones' : rarity}`}
            onClick={handleNavigateToItemInfo}
        >
            <div className={`market-card__image market-card__image_${category === 'evolving_stones' ? 'stones' : rarity}`}>
                <img 
                    className={`market-card__img ${category === ECategory.EVOLVING_STONES ? 'market-card__img_stones': `market-card__img_${name}`}`}
                    src={image} 
                    alt={name} 
                />
            </div>
            <div className="market-card__description">
                <div className="market-card__description-header market-card__header_top">
                    <div className="market-card__text">Collection #{collection}</div>
                    <div className="market-card__text market-card__text-number">{id}</div>
                </div>
                <div 
                    className={`market-card__description-title market-card__text_${category === 'evolving_stones' ? 'stones' : rarity}`}
                >
                    {name}
                </div>
                <div className="market-card__description-line"></div>
                <div className="market-card__description-header market-card__header_bottom">
                    <div className="market-card__text">Price:</div>
                    <div className="market-card__text">Rarity:</div>
                </div>
                <div className="market-card__description-price">
                    <div 
                        className={`market-card__text market-card__price-text market-card__text_${category === 'evolving_stones' ? 'stones' : rarity}`}
                    >
                        {price} $BUSD
                    </div>
                    <div 
                        className={`market-card__text market-card__price-text market-card__text_${category === 'evolving_stones' ? 'stones' : rarity}`}
                    >
                        {rarity}
                    </div>
                </div>
            </div>
        </div>
    )
}