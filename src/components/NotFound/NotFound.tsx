import React from "react";
import "./NotFound.scss";

interface INotFound {}

export const NotFound: React.FC<INotFound> = () => {
    return (
        <div className="not-found">No items match the search.</div>
    )
}