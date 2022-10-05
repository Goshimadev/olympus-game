import React, { useContext } from "react";
import "./Header.scss";
import logo from "../../images/olympus-logo.png";
import olympIcon from "../../images/coin.png";
import stoneIcon from "../../images/diamond.png";
import powderIcon from "../../images/drop.png";
import { Tooltip } from "antd";
import { UserContext } from "../../context/UserContext/UserContext";
import { useLocation } from "react-router-dom";
import { ERoute } from "src/constants";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    const { createdUser } = useContext(UserContext)

    const location = useLocation()

    const bigScreen = window.matchMedia('(min-width: 1441px)')
    const mediumScreen = window.matchMedia('(max-width: 1008px)')
    const smallScreen = window.matchMedia('(max-width: 640px)')

    return (
        <div 
            className="header"
            style={{
                right: (location.pathname.includes('/item-info') || bigScreen.matches) && !mediumScreen.matches  && '83px'
            }}
        >
            <div className="header__points">
                <div className="header__items">
                    <Tooltip 
                        overlayClassName="header__items-tooltip"
                        title="$OlYMP"
                        trigger={smallScreen.matches ? "click" : "hover"}
                    >
                        <img className="header__icons" src={olympIcon} alt="Olymp" />
                    </Tooltip>
                    <div className="header__items-total">{createdUser.olymp}</div>
                </div>
                <div className="header__items">
                    <Tooltip 
                        overlayClassName="header__items-tooltip"
                        title="Evolving stone"
                        trigger={smallScreen.matches ? "click" : "hover"}
                    >
                        <img className="header__icons" src={stoneIcon} alt="Stone" />
                    </Tooltip>
                    <div className="header__items-total">{createdUser.stones}</div>
                </div>
                <div className="header__items">
                    <Tooltip 
                        overlayClassName="header__items-tooltip"
                        title="Evolving powder"
                        trigger={smallScreen.matches ? "click" : "hover"}
                    >
                        <img className="header__icons" src={powderIcon} alt="Powder" />
                    </Tooltip>
                    <div className="header__items-total">{createdUser.powder}</div>
                </div>
            </div>
            <div className="header__text header__items-total">0xf7ds...654e</div>
            <img 
                className="header__logo" 
                src={logo} 
                alt="Logo" 
                style={{
                    display: 
                        (!mediumScreen.matches && location.pathname.includes(ERoute.ITEM_INFO.replace('/:id', '')))
                        || (mediumScreen.matches && !location.pathname.includes(ERoute.MARKETPLACE))
                        ? mediumScreen.matches && location.pathname.includes(ERoute.ITEM_INFO.replace('/:id', '')) ? 'none' : 'block' 
                        : 'none'
                }}
            /> 
        </div>
    )
}