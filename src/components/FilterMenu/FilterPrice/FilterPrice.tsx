import React from "react";
import './FilterPrice.scss';

interface IFilterPriceProps {
    value: {
        from: number,
        to: number
    }
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const FilterPrice: React.FC<IFilterPriceProps> = ({ value, onChange, className }) => {

    return (
        <div className={`filter-price ${className}`}>
            <div className="filter-price__input filter-price__input_from">
                <div className="filter-price__input-label">From:</div>
                <input 
                    className="filter-price__input-field" 
                    name='from'
                    type="text" 
                    maxLength={3}
                    minLength={1}
                    value={!value.from ? "" : value.from}
                    onChange={onChange}
                />
            </div>
            <div className="filter-price__input filter-price__input_to">
                <div className="filter-price__input-label">To:</div>
                <input 
                    className="filter-price__input-field" 
                    name='to'
                    type="text" 
                    maxLength={6} 
                    minLength={0}
                    value={!value.to ? "" : value.to}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}