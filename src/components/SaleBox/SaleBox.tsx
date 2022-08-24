import React, { useCallback, useState } from "react";
import './SaleBox.scss';
import minusIcon from '../../images/minus.svg';
import plusIcon from '../../images/plus.svg';
import { BoxInfo } from "../BoxInfo/BoxInfo";
import { IChest } from "src/interfaces";

interface ISaleBoxProps {
    id: string
    quantity: number
    data: IChest
    handleRemoveQuantity?: (id: string) => void
    handleAddQuantity?: (id: string) => void
}

export const SaleBox: React.FC<ISaleBoxProps> = ({ data, id, quantity, handleRemoveQuantity, handleAddQuantity }) => {
    const [ isOpen, setIsOpen ] = useState(false)

    const onAdd = useCallback(() => {
        handleAddQuantity(id)
    }, [ handleAddQuantity, id ])

    const onRemove = useCallback(() => {
        handleRemoveQuantity(id)
    }, [ handleRemoveQuantity, id ])

    const openBoxInfo = useCallback(() => {
        setIsOpen(true)
    }, [ setIsOpen ])

    const closeBoxInfo = useCallback(() => {
        setIsOpen(false)
    }, [ setIsOpen ])

    return (
        <div className="sale-box">
            {isOpen && 
                <BoxInfo 
                    name={data.class} 
                    type={data.class} 
                    price={data.price} 
                    boxImage={data.boxInfo.boxImage} 
                    charactersImage={data.boxInfo.charactersImage}
                    characterChance={data.boxInfo.characterChance}
                    olympChance={data.boxInfo.olympChance}
                    olymp={data.boxInfo.olymp}
                    powder={data.boxInfo.powder}
                    stoneChance={data.boxInfo.stoneChance}
                    goldCharacter={data.boxInfo.goldCharacter}
                    diamondCharacter={data.boxInfo.diamondCharacter}
                    onClickClose={closeBoxInfo} 
                />
            }
            <div 
                className="sale-box__box"
                onClick={openBoxInfo}
            >
                <h3 className={`sale-box__box-type sale-box__box_${data.class}`}>{data.class}</h3>
                <img className="sale-box__box-image" src={data.openChestImage} alt={data.class} />
                <div className="sale-box__box-wrapper">
                    <div className={`sale-box__box_${data.class}`}>{`${data.price} BUSD`}</div>
                </div>
            </div>
            <div className="sale-box__calculator">
                <button 
                    className="sale-box__calculator-operator"
                    onClick={onRemove}
                >
                    <img src={minusIcon} alt="Minus" />
                </button>
                <div 
                    className={`sale-box__calculator-quantity sale-box__quantity_${data.class}`}
                    style={{
                        color: quantity === 0 ? 'white' : null
                    }}
                >
                    {quantity}
                </div>
                <button 
                    className="sale-box__calculator-operator"
                    onClick={onAdd}
                >
                    <img src={plusIcon} alt="Plus" />
                </button>
            </div>
        </div>
    )
}