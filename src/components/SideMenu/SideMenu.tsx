import React from "react";
import "./SideMenu.scss";
import logo from "../../images/olympus-logo.png";
import setIcon from "../../images/set.svg";
import telegramIcon from "../../images/telegram.svg";
import twitterIcon from "../../images/twitter.svg";
import { BigButton } from "../BigButton/BigButton";
import { MenuItemsGroup } from "../MenuItemsGroup/MenuItemsGroup";
import { useLocation } from "react-router-dom";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import { ERoute } from "src/constants";

interface ISideMenuProps {}

export const SideMenu: React.FC<ISideMenuProps> = () => {
    const location = useLocation()

    return (
        <div className="side-menu">
            <img className="side-menu__logo" src={logo} alt="Logo" />
            {location.pathname === ERoute.ALL_ITEMS 
            || location.pathname === ERoute.MARKET_SALE
            || location.pathname === ERoute.AUCTION
            || location.pathname === ERoute.PAST_AUCTIONS
            || location.pathname === ERoute.COLLECTION
            ? <FilterMenu />
            : <MenuItemsGroup />
            }
            <div className="side-menu__line"></div>
            <div className="side-menu__links">
                <img src={setIcon} alt="Icon" />
                <img src={telegramIcon} alt="Telegram icon" />
                <img src={twitterIcon} alt="Twitter icon" />
            </div>
            {location.pathname === ERoute.ALL_ITEMS 
            || location.pathname === ERoute.MARKET_SALE
            || location.pathname === ERoute.AUCTION
            || location.pathname === ERoute.PAST_AUCTIONS
            || location.pathname === ERoute.COLLECTION
            ? null 
            :   <div className="side-menu__button-wrapper">
                    <BigButton
                        className="side-menu__button"
                        label="Disconnect"
                    />
                </div>
            }
        </div>
    )
}