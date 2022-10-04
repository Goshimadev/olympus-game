import React from "react";
import { useLocation } from "react-router";
import { ERoute } from "src/constants";
import { MenuItem } from "../MenuItem/MenuItem";
import './MenuItemsGroup.scss';

interface IMenuItemsGroupProps {}

export const MenuItemsGroup: React.FC<IMenuItemsGroupProps> = () => {
    const location = useLocation()

    return (
        <div className="menu-items">
            <div className="menu-items__line"></div>
            <div className="menu-items__group">
                <MenuItem label="home" route={ERoute.HOMEPAGE} />
                <MenuItem label="my characters" route={ERoute.CHARACTERS} />
                <MenuItem label="my chests" route={ERoute.CHESTS} />
                <MenuItem label="the foundry" route={ERoute.FOUNDRY} />
                <MenuItem label="marketplace" route={ERoute.ALL_ITEMS} prevPath={location.pathname} />
            </div>
        </div>
    )
}