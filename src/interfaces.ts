export interface IStoneObject {
    numberOfStones: number
    id: string
    isClaimed: boolean
    timeToCreate: number
    isCreated: boolean
}

export interface ICharacter {
    id: string
    name: string
    avatar: string
    image: string
    level: number
    type: string
    rarity: string
    status: string
}

export interface IUser {
    id: string
    olymp: number
    stones: number
    powder: number
    powderToCreateStone: number
}

export interface IChest {
    id: string
    name: string,
    image: string,
    class: string,
    icon: string,
    openChestImage: string,
    price: number,
    quantity: number,
    boxInfo: {
        boxImage: string,
        charactersImage: string,
        characterChance: number,
        olympChance: number,
        olymp: string,
        stoneChance: number,
        powderChance: number,
        powder: string,
        goldCharacter: number,
        diamondCharacter: number
    }
}

export interface IOption {
    label: string,
    value: string,
    className?: string
}

export interface IFilter {
    category: string[],
    rarity: string[],
    level: {
        from: number,
        to: number
    },
    priceRange: {
        from: number,
        to: number
    }
}

export interface IMarketItem {
    id: string,
    collection: number,
    name: string, 
    price: number,
    rarity: string,
    category: string,
    level: number,
    image: string,
    type?: string,
    imageItem?: string,
    pastAuction?: boolean
}

export interface INumberRange {
    from: number,
    to: number
}

