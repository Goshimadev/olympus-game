import React from "react";
import './BoxInfo.scss';
import closeIcon from '../../images/close.svg';
import olympIcon from '../../images/olymp-icon.svg';
import stoneIcon from '../../images/stone-icon.png';
import powderIcon from '../../images/drop.png';

interface IBoxInfoProps {
    name: string
    type: string
    price: number
    boxImage: string
    charactersImage: string
    characterChance: number
    olympChance: number
    olymp: string
    stoneChance: number
    powder: string
    goldCharacter: number
    diamondCharacter: number
    onClickClose?: () => void
}

export const BoxInfo: React.FC<IBoxInfoProps> = ({ name, type, price, boxImage, stoneChance, powder, diamondCharacter, charactersImage, goldCharacter, characterChance, olympChance, olymp, onClickClose }) => {

    return (
        <div className="box-info__wrapper">
            <div className="box-info">
                <button 
                    className="box-info__close"
                    onClick={onClickClose}
                >
                    <img src={closeIcon} alt="Close" />
                </button>
                <div className="box-info__container box-info__container_left">
                    <h2 
                        className={`box-info__container-title box-info__color_${type}`}
                    >
                        {`${name[0].toUpperCase() + name.substring(1)} Box`}
                    </h2>
                    <img className="box-info__container-image" src={boxImage} alt="Common Box" />
                    <div className="box-info__price-wrapper">
                        <div 
                            className={`box-info__container-price box-info__color_${type}`}
                        >
                            {`${price} $BUSD`}
                        </div>
                    </div>
                </div>
                <div className="box-info__container box-info__container_right">
                    <h2 className="box-info__container-title">What can you get?</h2>
                    <div className="box-info__container-avatars">
                        <img className="box-info__avatars-image" src={charactersImage} alt='Characters' />
                        <div className={`box-info__avatars-background box-info__avatars_${type}`}></div>
                    </div>
                    <div className="box-info__container-data">
                        <div className="box-info__data-row">
                            <div className="box-info__data-wrapper">
                                <span 
                                    className={type === 'legendary' ? 'box-info__color_violet' : `box-info__color_${type}`}
                                >
                                    <b>Character</b></span> - {characterChance}% chance of getting one of these characters
                            </div>
                        </div>
                        {goldCharacter > 0 ? 
                            <div className="box-info__data-row">
                                <div className="box-info__data-wrapper">
                                    <span 
                                        className="box-info__color_rare"
                                    >
                                        Gold Character</span> - {goldCharacter}% chance of getting your character in gold
                                </div>
                            </div> : null
                        }
                        {diamondCharacter > 0 ? 
                            <div className="box-info__data-row">
                                <div className="box-info__data-wrapper">
                                    <span 
                                        className="box-info__color_legendary"
                                    >
                                        Diamond Character</span> - {diamondCharacter}% chance of getting your character in diamond
                                </div>
                            </div> : null
                        }
                        <div className="box-info__data-row">
                            <img className="box-info__data-icon" src={olympIcon} alt="Olymp" />
                            <div className="box-info__data-wrapper">
                                <span 
                                    className={type === 'legendary' ? 'box-info__color_violet' : `box-info__color_${type}`}
                                >
                                    <b>$OLYMP</b></span> - {olympChance}% chance of getting {olymp} $OLYMP
                            </div>
                        </div>
                        <div className="box-info__data-row">
                        <img className="box-info__data-icon" src={stoneIcon} alt="Stone" />
                            <div className="box-info__data-wrapper">
                                <span 
                                    className={type === 'legendary' ? 'box-info__color_violet' : `box-info__color_${type}`}
                                >
                                    <b>Evolving stone</b></span> - {stoneChance}% chance of getting 1 evolving stone
                            </div>
                        </div>
                        <div className="box-info__data-row">
                            <img className="box-info__data-icon" src={powderIcon} alt="Powder" />
                            <div className="box-info__data-wrapper">
                                <span 
                                    className={type === 'legendary' ? 'box-info__color_violet' : `box-info__color_${type}`}
                                >
                                    <b>Evolving powder</b></span> - 100% chance of getting {powder} powder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}