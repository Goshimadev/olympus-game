import React from "react";
import { NavLink } from "react-router-dom";
import { ERoute } from "../../constants";

import "./MenuItem.scss";

interface IMenuItemProps {
    label: string;
    route: ERoute | string
    prevPath?: string
}

export const MenuItem: React.FC<IMenuItemProps> = ({ label, route, prevPath }) => {
    return (
        <NavLink 
            className='menu-item' 
            to={route}
            end={route === ERoute.HOMEPAGE}
            state={prevPath && {prevPath}}
        >
            <div className="menu-item__point"></div>
            <div className="menu-item__title">{label}</div>
        </NavLink>
    )
}