import React, { createContext, useCallback, useState } from "react";
import { noop } from 'lodash';
import { stoneNumberOptions } from "../../constants";
import { IOption, IStoneObject } from "../../interfaces";

interface IFoundryPageContextProps {
    selectedValue: IOption
    setSelectedValue: React.Dispatch<React.SetStateAction<IOption>>
    hasProgressStarted: boolean
    setHasProgressStarted: React.Dispatch<React.SetStateAction<boolean>>
    createdStones: IStoneObject[]
    setCreatedStones: React.Dispatch<React.SetStateAction<IStoneObject[]>>
    children?: React.ReactNode
    handleUpdateStone: (id: string, key: string, value: any) => void
}

export const FoundryPageContext = createContext<IFoundryPageContextProps>({
    selectedValue: stoneNumberOptions[0],
    setSelectedValue: noop,
    hasProgressStarted: false,
    setHasProgressStarted: noop,
    createdStones: [],
    setCreatedStones: noop,
    handleUpdateStone: noop
})

export const FoundryPageContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [ selectedValue, setSelectedValue ] = useState<IOption>(stoneNumberOptions[0])
    const [ hasProgressStarted, setHasProgressStarted ] = useState(false)
    const [ createdStones, setCreatedStones ] = useState<IStoneObject[]>([])

    const handleUpdateStone = useCallback((id: string, key: string, value: any) => {
        setCreatedStones(createdStones => createdStones.map(item => {
            if (id === item.id) {
                return {...item, [key]: value} 
            }
            return item
        }))
    }, [ setCreatedStones ])

    return (
        <FoundryPageContext.Provider 
            value={{
                selectedValue,
                setSelectedValue,
                hasProgressStarted,
                setHasProgressStarted,
                createdStones,
                setCreatedStones,
                handleUpdateStone
            }}
        >
            {children}
        </FoundryPageContext.Provider>
    )
}