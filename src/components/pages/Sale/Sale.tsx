import React, { useCallback, useMemo, useState } from "react";
import { BigButton } from "src/components/BigButton/BigButton";
import { SaleBox } from "src/components/SaleBox/SaleBox";
import { chestType, ERoute } from "src/constants";
import { IChest } from "src/interfaces";
import './Sale.scss';
import audienceImage from '../../../images/audience.png';
import { useNavigate } from "react-router-dom";

interface ISaleProps {}

export const Sale: React.FC<ISaleProps> = () => {
    const [ chests, setChests ] = useState<IChest[]>([])
    const [ totalQuantity, setTotalQuantity ] = useState(0)

    const navigate = useNavigate()

    const handleAddQuantity = useCallback((id: string) => {
        setChests(chests => {
            const chest = chests.find(x => x.id === id)

            if (chest) {
                return chests.map(chest => chest.id === id ? {...chest, quantity: chest.quantity + 1} : chest)
            }

            return [...chests, {...chestType.find(x => x.id === id), quantity: 1}]
        })

        setTotalQuantity(quantity => quantity + 1)

    }, [ setChests, setTotalQuantity ])

    const handleRemoveQuantity = useCallback((id: string) => {
        setChests(chests => {
            const chest = chests.find(x => x.id === id)
            
            if (chest && chest.quantity > 1) {
                return chests.map(chest => chest.id === id ? {...chest, quantity: chest.quantity - 1} : chest)
            } else {
                return chests.filter(x => x.id !== id)
            }
        })

        setTotalQuantity(quantity => quantity - 1)

    }, [ setChests ])

    const totalPrice = useMemo(() => {
        return chests?.reduce((acc, chest) => {
            return acc + chest.price * chest.quantity
        }, 0)
    }, [ chests ])

    const navigateToPresenting = useCallback(() => {
        navigate(ERoute.PRESENTING)
    }, [ navigate ])

    return (
        <div className="sale">
            <div className="sale__section sale__section_choose">
                <h2 className="sale__section-title">Choose the boxes you want</h2>
                <p className="sale__section-text">Select the quantity of each box you want</p>
                <div className="sale__section-chests">
                    {chestType.map(data => {
                        return (
                            <SaleBox 
                                key={data.id} 
                                data={data}
                                id={data.id} 
                                quantity={chests?.find(x => x.id === data.id)?.quantity || 0} 
                                handleRemoveQuantity={handleRemoveQuantity} 
                                handleAddQuantity={handleAddQuantity} 
                            />
                        )
                    })}
                </div>
            </div>
            <div className="sale__section sale__section_summary">
                <h2 className="sale__section-title">Summary</h2>
                <div className="sale__section-container">
                    <img className='sale__container-image' src={audienceImage} alt="Audience" />
                    <div className="sale__container sale__container_header">
                        <div className="sale__label_item sale__label-header">item</div>
                        <div className="sale__label_quantity sale__label-header">quantity</div>
                        <div className="sale__label_price sale__label-header">price</div>
                    </div>
                    {chests.length > 0 ? 
                        <div className="sale__container sale__container_table">
                            {chests.map(data => {
                                return (
                                    <div key={data.id} className="sale__table-row">
                                        <div 
                                            className="sale__label_item sale__label-row"
                                        >
                                            {`${data.class} Box`}
                                        </div>
                                        <div 
                                            className="sale__label_quantity sale__label-row sale__label-row_value"
                                        >
                                            <div className="sale__quantity-background">{data.quantity}</div>
                                        </div>
                                        <div 
                                            className="sale__label_price sale__label-row sale__label-row_value"
                                        >
                                            {`${data.price * data.quantity}BUSD`}
                                        </div>
                                    </div>
                                )
                            })}
                        </div> : null
                    }
                    <div className="sale__container sale__container_total">
                        <div className="sale__label_item sale__label-row">Total:</div>
                        <div className="sale__label_quantity sale__label-row sale__label-row_value">
                            <div className="sale__quantity-background">{totalQuantity}</div>
                        </div>
                        <div 
                            className="sale__label_price sale__label-row sale__label-row_value"
                        >
                            {`${totalPrice}BUSD`}
                        </div>
                    </div>
                </div>
                <BigButton 
                    className="sale__button"
                    label='purchase' 
                    onClick={navigateToPresenting}
                />
            </div>
        </div>
    )
}