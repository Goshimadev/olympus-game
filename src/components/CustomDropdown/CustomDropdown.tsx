import React, { useCallback, useRef, useState } from 'react';
import './CustomDropdown.scss';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IOption } from 'src/interfaces';
import { countChildrenHeight } from 'src/utils';

interface ICustomDropdownProps {
    value: IOption
    options: IOption[]
    onChange: (value: IOption) => void 
    className?: string
    mode?: string
}

export const CustomDropdown: React.FC<ICustomDropdownProps> = ({ value, options, onChange, className, mode }) => {
    const [ isOpen, setIsOpen ] = useState(false)
 
    const dropdownRef = useRef<HTMLDivElement>()
    const optionsRef = useRef<HTMLDivElement>()
    const smallScreen = matchMedia('(max-width: 690px)')

    const handleToggleDropdown = useCallback(() => {
        setIsOpen(isOpen => !isOpen)
    }, [ setIsOpen ])

    const handleChooseOption = useCallback((e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement

        onChange(JSON.parse(target.dataset.value))
        
        setIsOpen(false)
    }, [setIsOpen, onChange ])

    const height = countChildrenHeight(optionsRef?.current?.children)

    return (
        <div 
            className={`dropdown ${className}`}
        >
            <div 
                className={`dropdown__wrapper dropdown__wrapper_${mode}`}
            >
                <div 
                    ref={dropdownRef}
                    className='dropdown__select dropdown__rectangle' 
                    onClick={handleToggleDropdown}
                    style={{
                        borderRadius: isOpen && (smallScreen.matches ? '12px 12px 0 0' : '16px 16px 0 0'),
                        borderBottom: isOpen && 0
                    }}
                >
                    {value.label}
                    {isOpen ? <IoIosArrowUp className="dropdown__icon"/> : <IoIosArrowDown className="dropdown__icon" />}
                </div>
                <div 
                    ref={optionsRef}
                    className='dropdown__options'
                    style={{
                        height: isOpen ? `${height}px` : '0px'
                    }}
                >
                    {options.map((x) => {
                        if (x.label === value.label) {
                            return null
                        }

                        return (
                            <div 
                                key={x.value}
                                className={`dropdown__option dropdown__rectangle ${x.className}`} 
                                onClick={handleChooseOption}
                                data-value={JSON.stringify(x)}
                            >
                                {x.label}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}