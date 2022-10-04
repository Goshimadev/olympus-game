import React, { useCallback } from "react";
import { Slider } from "antd";
import { SliderMarks } from "antd/lib/slider";
import './FilterSlider.scss';
import { INumberRange } from "src/interfaces";
 
interface IFilterSliderProps {
    value: INumberRange
    onChange: (from: number, to: number) => void
    className?: string
}

let defaultMarks: SliderMarks = {
    1: {
        label: 1,
        style: {
            color: "#A29ABE",
            opacity: 0.8
        }
    }, 2: {
        label: 2,
        style: {
            color: "transparent"
        }
    }, 3: {
        label: 3,
        style: {
            color: "transparent"
        }
    }, 4: {
        label: 4,
        style: {
            color: "transparent"
        }
    }, 5: {
        label: 5,
        style: {
            color: "transparent"
        }
    }, 6: {
        label: 6,
        style: {
            color: "transparent"
        }
    }, 7: {
        label: 7,
        style: {
            color: "#A29ABE",
            opacity: 0.8
        }
    }
}

export const FilterSlider: React.FC<IFilterSliderProps> = ({ value, className, onChange }) => {
    
    const handleOnChange = useCallback((value: [number, number]) => {        
        onChange(value[0], value[1])
    }, [ onChange ])

    return (
        <div className={`filter-slider ${className}`}>
            <Slider
                range
                defaultValue={[1, 7]}
                marks={{
                    ...defaultMarks,
                    [value.from]: {
                        label: value.from,
                        style: {
                            color: '#FFF',
                            opacity: 1
                        }
                    },
                    [value.to]: {
                        label: value.to,
                        style: {
                            color: '#FFF',
                            opacity: 1
                        }
                    }
                }}
                step={1}
                min={1}
                max={7}
                tooltip={{ open: false }}
                onChange={handleOnChange}
                value={[value.from, value.to]}
            />
        </div>
    )
}