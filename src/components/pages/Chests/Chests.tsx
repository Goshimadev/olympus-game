import React from "react";
import { chestType } from "src/constants";
import { Chest } from "../../Chest/Chest";
import "./Chests.scss";

interface IChestsProps {}

export const Chests: React.FC<IChestsProps> = () => {
    return (
        <div className="chests">
            {chestType.map(data => <Chest key={data.id} name={data.name} image={data.image} icon={data.icon} mode={data.class} />)}
        </div>
    )
}