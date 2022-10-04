import React, { useCallback } from "react";
import { SmallButton } from "../SmallButton/SmallButton";
import { GradientContainer } from "../GradientContainer/GradientContainer";
import "./Chest.scss";
import { Tooltip } from "antd";
import { CustomTooltip } from "../CustomTooltip/CustomTooltip";
import { EChestType } from "../../constants";
 
interface IChestsProps {
    name: string
    image: string
    mode: any
    className?: string
    icon?: string
}

export const Chest: React.FC<IChestsProps> = ({ name, image, className, icon, mode="common" }) => {

    const setTooltip = useCallback(() => {
        switch(mode) {
            case EChestType.COMMON:
                return (
                    <CustomTooltip
                        mode={mode}
                        character={50}
                        olymp={30}
                        olympLevel="200-800"
                        stone={10}
                        powder={100}
                        powderLevel="10-50"
                    />
                )
            case EChestType.UNCOMMON:
                return (
                    <CustomTooltip
                        mode={mode}
                        character={100} 
                        olymp={50}
                        olympLevel="800-3200"
                        stone={20}
                        powder={100}
                        powderLevel="40-200"
                    />
                )
            case EChestType.RARE:
                return(
                    <CustomTooltip
                        mode={mode}
                        character={84} 
                        olymp={40}
                        olympLevel="400-1600"
                        stone={15}
                        powder={100}
                        powderLevel="20-100"
                    />
                )
            case EChestType.LEGENDARY:
                return (
                    <CustomTooltip
                        mode={mode}
                        character={100} 
                        olymp={60}
                        olympLevel="1600-6400"
                        stone={25}
                        powder={100}
                        powderLevel="160-400"
                    />
                )
        }
        
    }, [ mode ])

    return (
        <div className={`chest chest-${mode} ${className}`}>
            <GradientContainer className={`chest__gradient-${mode}`} />
            <div className="chest__image">
                <img className="chest__image-img" src={image} alt="Chest" />
                
                <Tooltip 
                    overlayClassName={`chest__tooltip-${mode}`}
                    title={setTooltip}
                >
                    <div className={`chest__tooltip-icon chest__icon-${mode}`}>
                        <img className="chest__tooltip-i" src={icon} alt="Tooltip" />
                    </div>
                </Tooltip>
            </div>
            <h1 className="chest__name">{name}</h1>
            <div className="chest__buttons">
                <SmallButton 
                    className="chest__buttons-open" 
                    label="open" 
                />
                <SmallButton 
                    className="chest__buttons-sell" 
                    label="sell" 
                />
            </div>
        </div>
    )
}