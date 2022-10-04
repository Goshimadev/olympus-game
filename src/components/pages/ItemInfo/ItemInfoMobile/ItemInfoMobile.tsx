import classNames from "classnames";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router";
import { BigButton } from "src/components/BigButton/BigButton";
import { ERoute } from "src/constants";
import "./ItemInfoMobile.scss";

interface IItemInfoMobileProps {
    id: string
    name: string
    collection: number
    category: string
    rarity: string
    price: number
    imageItem: string
    value: string | number
    className?: string
    onClick?: () => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    addFunction?: () => void
}

export const ItemInfoMobile: React.FC<IItemInfoMobileProps> = ({ 
    id, 
    name, 
    collection, 
    category, 
    rarity, 
    price,
    imageItem, 
    value,
    className, 
    onClick,
    onChange,
    addFunction
}) => {

    const location = useLocation()

    return (
        <div className={`item-info-mobile ${className}`}>

            <div className="item-info-mobile__name-wrapper">
                <IoIosArrowBack 
                    className="item-info-mobile__arrow" 
                    onClick={onClick}
                />
                <div 
                    className={classNames('item-info__main-name', {
                        [`item-info__headline_${rarity}`] : category !== 'evolving_stones' && name !== 'common box',
                        'item-info__headline_stone': category === 'evolving_stones',
                        'item-info__headline_common-box': name === 'common box'
                    })}
                >
                    {name}
                </div>
            </div>

            <div className="item-info-mobile__data">
                <div className="item-info__text">Collection #{collection}</div>
                <div className="item-info__text item-info__text_bright">{id}</div>
            </div>

            <div 
                className={classNames('item-info__container-image', {
                    [`item-info__container-image_${rarity}`]: category !== 'evolving_stones' && name !== 'common box',
                    'item-info__container-image_stone': category === 'evolving_stones',
                    'item-info__container-image_common-box': name === 'common box'
                })}
            >
                <img 
                    className={`item-info__img item-info__img_${category?.replace('_', '-')} item-info__img_${name}`} 
                    src={imageItem} 
                    alt={name} 
                />
            </div>

            <div className="item-info-mobile__price-wrapper">
                {location.state.prevPath.includes(ERoute.COLLECTION)
                ?   <div 
                        className={classNames('item-info__main-input', {
                            [`item-info__main-input_${rarity}`] : category !== 'evolving_stones' && name !== 'common box',
                            'item-info__main-input_stone': category === 'evolving_stones',
                            'item-info__main-input_common-box': name === 'common box'
                        })}
                    >
                        <div className="item-info__input-label">Set a price:</div>
                        <input 
                            className="item-info__input" 
                            name="price"
                            type="text"
                            onChange={onChange}
                            value={value}
                            maxLength={4}
                            minLength={1}
                        />
                    </div> 

                :   <div 
                        className={classNames('item-info__main-price', {
                            [`item-info__headline_${rarity} item-info__headline_${rarity}_reversed`] : category !== 'evolving_stones' && name !== 'common box',
                            'item-info__headline_stone': category === 'evolving_stones',
                            'item-info__headline_common-box': name === 'common box'
                        })}
                    >
                        {price} $BUSD
                    </div>
                }

                <BigButton
                    className={classNames('item-info__main-button', {
                        [`item-info__main-button_${rarity}`] : category !== 'evolving_stones' && name !== 'common box',
                        'item-info__main-button_stone': category === 'evolving_stones',
                        'item-info__main-button_common-box': name === 'common box'
                    })}
                    label={location.state.prevPath.includes(ERoute.COLLECTION) ? 'sell now' : 'buy now'}
                    onClick={location.state.prevPath.includes(ERoute.COLLECTION) ? null : addFunction}
                />
            </div>
        </div>
    )
}