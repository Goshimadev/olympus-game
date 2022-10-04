import React, { useCallback } from "react";
import './FilterOption.scss';
 
interface IFilterOptionProps {
    name: string
    className?: string
    isSelected?: boolean
    onClick?: (x: string) => void
}

export const FilterOption: React.FC<IFilterOptionProps> = ({ name, className, isSelected, onClick }) => {

    const selectOption = useCallback(() => {
        onClick(name)
    }, [ onClick, name ])

    return (
        <div 
            className={`filter-option ${className} ${isSelected && 'selected'}`}
            onClick={selectOption}
        >
            {name}
        </div>
    )
}