import React, { useCallback, useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BigButton } from "src/components/BigButton/BigButton";
import { addToCollection, getDataById } from "src/data";
import { IMarketItem } from "src/interfaces";
import "./ItemInfo.scss";
import { About } from "src/components/About/About";
import { MarketplaceContext } from "src/context/MarketplaceContext/MarketplaceContext";
import { ERoute } from "src/constants";
import { uniqueId } from "lodash";
import { ItemInfoMobile } from "./ItemInfoMobile/ItemInfoMobile";

interface IItemInfoProps {}

export const ItemInfo: React.FC<IItemInfoProps> = () => {
    const { setMyCollection, getCollectionById } = useContext(MarketplaceContext)

    const [ sellPrice, setSellPrice ] = useState<number>(0)
    const [ item, setItem ] = useState<IMarketItem>(null)

    const location = useLocation()
    const navigate = useNavigate()
    const { id } = useParams()
    const mobileView = window.matchMedia('(max-width: 1024px)')

    const handleNavigateBack = useCallback(() => {
        navigate(location.state.prevPath || ERoute.MARKETPLACE + '/' + ERoute.MARKET + '/' + ERoute.ALL_ITEMS)
    }, [ navigate, location ])

    const handleAddToMyColletion = useCallback(() => {
        setMyCollection(myCollection => {
            return [
                ...myCollection,
                {...item, id: uniqueId('coll_')}
            ]
        })

        addToCollection(item)

    }, [ setMyCollection, item ])

    const handleSetSellPrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const pattern = /^(|\d)+$/g

        if (!pattern.test(e.target.value)) {
            e.preventDefault()

            return
        }

        setSellPrice(parseInt(e.target.value) || 0)

    }, [ setSellPrice ])

    useEffect(() => {
        if (location.state.prevPath.includes(ERoute.COLLECTION)) {
            setItem(getCollectionById(id))

        } else {
            setItem(getDataById(id))

        }
    }, [ id, setItem, location, getCollectionById ])

    return (
        <div className="item-info">
            {!mobileView.matches 
                && <div className="item-info__button-wrapper">
                    <IoIosArrowBack className="filter-menu__arrow" />
                    <BigButton
                        className="item-info__button"
                        label="back"
                        onClick={handleNavigateBack}
                    />
                </div>
            }

            <div className="item-info__container">
                {!mobileView.matches 
                    && <div 
                        className={classNames('item-info__container-image', {
                            [`item-info__container-image_${item?.rarity}`]: item?.category !== 'evolving_stones' && item?.name !== 'common box',
                            'item-info__container-image_stone': item?.category === 'evolving_stones',
                            'item-info__container-image_common-box': item?.name === 'common box'
                        })}
                    >
                        <img 
                            className={`item-info__img item-info__img_${item?.category.replace('_', '-')} item-info__img_${item?.name}`} 
                            src={item?.imageItem} 
                            alt={item?.name} 
                        />
                    </div>
                }

                <div className="item-info__container-content">
                    {mobileView.matches
                        ? <ItemInfoMobile 
                            className=""
                            id={item?.id}
                            name={item?.name}
                            collection={item?.collection}
                            category={item?.category}
                            rarity={item?.rarity}
                            price={item?.price}
                            imageItem={item?.imageItem}
                            onClick={handleNavigateBack}
                            onChange={handleSetSellPrice}
                            value={sellPrice || ''}
                            addFunction={handleAddToMyColletion}
                        />
                        : <div className="item-info__content-main">
                            <div className="item-info__main">
                                <div 
                                    className={classNames('item-info__main-name', {
                                        [`item-info__headline_${item?.rarity}`] : item?.category !== 'evolving_stones' && item?.name !== 'common box',
                                        'item-info__headline_stone': item?.category === 'evolving_stones',
                                        'item-info__headline_common-box': item?.name === 'common box'
                                    })}
                                >
                                    {item?.name}
                                </div>
                                {location.state.prevPath.includes(ERoute.COLLECTION)
                                ?   <div 
                                        className={classNames('item-info__main-input', {
                                            [`item-info__main-input_${item?.rarity}`] : item?.category !== 'evolving_stones' && item?.name !== 'common box',
                                            'item-info__main-input_stone': item?.category === 'evolving_stones',
                                            'item-info__main-input_common-box': item?.name === 'common box'
                                        })}
                                    >
                                        <div className="item-info__input-label">Set a price:</div>
                                        <input 
                                            className="item-info__input" 
                                            name="price"
                                            type="text"
                                            onChange={handleSetSellPrice}
                                            value={sellPrice || ''}
                                            maxLength={4}
                                            minLength={1}
                                        />
                                    </div> 

                                :   <div 
                                        className={classNames('item-info__main-price', {
                                            [`item-info__headline_${item?.rarity} item-info__headline_${item?.rarity}_reversed`] : item?.category !== 'evolving_stones' && item?.name !== 'common box',
                                            'item-info__headline_stone': item?.category === 'evolving_stones',
                                            'item-info__headline_common-box': item?.name === 'common box'
                                        })}
                                    >
                                        {item?.price} $BUSD
                                    </div>
                                }
                            </div>

                            <div className="item-info__main">
                                <div className="item-info__main-data">
                                    <div className="item-info__text">Collection #{item?.collection}</div>
                                    <div className="item-info__text item-info__text_bright">{item?.id}</div>
                                </div>
                                <BigButton
                                    className={classNames('item-info__main-button', {
                                        [`item-info__main-button_${item?.rarity}`] : item?.category !== 'evolving_stones' && item?.name !== 'common box',
                                        'item-info__main-button_stone': item?.category === 'evolving_stones',
                                        'item-info__main-button_common-box': item?.name === 'common box'
                                    })}
                                    label={location.state.prevPath.includes(ERoute.COLLECTION) ? 'sell now' : 'buy now'}
                                    onClick={location.state.prevPath.includes(ERoute.COLLECTION) ? null : handleAddToMyColletion}
                                />
                            </div>
                        </div>
                    }

                    <div className="item-info__content-description">
                        <div className="item-info__description">
                            <div className="item-info__description-title">About</div>
                            <About 
                                className="item-info__description-about"
                                category={item?.category}
                                rarity={item?.rarity}
                                level={item?.level}
                            />
                        </div>

                        <div className="item-info__description">
                            <div className="item-info__description-title">Info</div>
                            <div className="item-info__description-info">
                                <div className="item-info__text item-info__text_bright">Date/Time:</div>
                                <div className="item-info__text">02/09/2022 3:35 PM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}