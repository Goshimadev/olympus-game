import React from "react";
import { NavLink } from "react-router-dom";

import "./Info.scss";

interface IInfoProps {
    links: {name: string, route: string}[]
    className?: string
    hasGradient?: boolean
}

export const Info: React.FC<IInfoProps> = ({ links, className, hasGradient }) => {

    return(
        <div className="info">
            <div className="info__menu">
                {links.map(link => {
                    return (
                        <NavLink 
                            key={link.name}
                            className={`info__menu-item ${className}`} 
                            to={link.route}

                        >
                            <div className={hasGradient && 'gradient'}>
                                {link.name}
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}