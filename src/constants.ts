import commonChest from "./images/chest1.png";
import uncommonChest from "./images/chest2.png";
import rareChest from "./images/chest3.png";
import legendaryChest from "./images/chest4.png";
import commonIcon from "./images/common-i.svg";
import uncommonIcon from "./images/uncommon-i.svg";
import rareIcon from "./images/rare-i.svg";
import legendaryIcon from "./images/legendary-i.svg";
import commonOpenImage from './images/common-open.png';
import uncommonOpenImage from './images/uncommon-open.png';
import rareOpenImage from './images/rare-open.png';
import legendaryOpenImage from './images/legendary-open.png';
import boxCommonImage from './images/box-opened-common.png';
import boxUncommonImage from './images/box-opened-uncommon.png';
import boxRareImage from './images/box-opened-rare.png';
import boxLegendaryImage from './images/box-opened-legendary.png';
import commonAvatars from './images/avatars-common.png';
import uncommonAvatars from './images/avatars-uncommon.png';
import rareAvatars from './images/avatars-rare.png';
import legendaryAvatars from './images/avatars-legendary.png';
import { IChest, IOption } from "./interfaces";

export const BASE_URL = ''

export enum ERoute {
    HOMEPAGE = '/',
    CHARACTERS = '/my-characters',
    CHESTS = '/my-chests',
    FOUNDRY = '/the-foundry',
    MARKETPLACE = '/marketplace',
    SUMMARY ='/my-characters/:id/summary',
    EVOLVING = '/my-characters/:id/evolving',
    TRAINING = '/my-characters/:id/training',
    PRESENTING = '/presenting',
    MARKET = '/marketplace/market',
    COLLECTION = '/marketplace/my-collection',
    ALL_ITEMS = '/marketplace/market/all-items',
    MARKET_SALE = '/marketplace/market/market-sale',
    AUCTION = '/marketplace/market/auction',
    PAST_AUCTIONS = '/marketplace/market/past-auctions',
    ITEM_INFO = '/item-info/:id',
    CONNECT_YOUR_WALLET = '/connect-your-wallet',
    SALE = '/sale'
}

export enum ECategory {
    CHARACTERS = 'characters',
    CHESTS = 'chests',
    EVOLVING_STONES = 'evolving_stones'
}

export enum ESortOption {
    LOWEST_PRICE = 'lowest_price',
    HIGHEST_PRICE = 'highest_price'
}

export const allCategories = [ECategory.CHARACTERS, ECategory.CHESTS, ECategory.EVOLVING_STONES]

export enum ERarity {
    COMMON = 'common',
    GOLD = 'gold',
    DIAMOND = 'diamond'
}

export enum EChestType {
    COMMON = "common",
    UNCOMMON = "uncommon",
    RARE = "rare",
    LEGENDARY = "legendary"
}

export const chestType:IChest[] = [
    {
        id: "afdmskjdserertr",
        name: "Common Chest",
        image: commonChest,
        class: "common",
        icon: commonIcon,
        openChestImage: commonOpenImage,
        price: 30,
        quantity: 0,
        boxInfo: {
            boxImage: boxCommonImage,
            charactersImage: commonAvatars,
            characterChance: 50,
            olympChance: 30,
            olymp: '200-800',
            stoneChance: 10,
            powderChance: 100,
            powder: '10-50',
            goldCharacter: 0,
            diamondCharacter: 0
        }
    },
    {
        id: "weyqiryeiwer",
        name: "Uncommon Chest",
        image: uncommonChest,
        class: "uncommon",
        icon: uncommonIcon,
        openChestImage: uncommonOpenImage,
        price: 60,
        quantity: 0,
        boxInfo: {
            boxImage: boxUncommonImage,
            charactersImage: uncommonAvatars,
            characterChance: 100,
            olympChance: 40,
            olymp: '400-1600',
            stoneChance: 15,
            powderChance: 100,
            powder: '20-100',
            goldCharacter: 20,
            diamondCharacter: 0
        }
    },
    {
        id: "mdsafhwowdua",
        name: "Rare Chest",
        image: rareChest,
        class: "rare",
        icon: rareIcon,
        openChestImage: rareOpenImage,
        price: 100,
        quantity: 0,
        boxInfo: {
            boxImage: boxRareImage,
            charactersImage: rareAvatars,
            characterChance: 100,
            olympChance: 50,
            olymp: '800-3200',
            stoneChance: 20,
            powderChance: 100,
            powder: '40-200',
            goldCharacter: 50,
            diamondCharacter: 0
        }
    },
    {
        id: "posfjsidufhnd",
        name: "Legendary Chest",
        image: legendaryChest,
        class: "legendary",
        icon: legendaryIcon,
        openChestImage: legendaryOpenImage,
        price: 140,
        quantity: 0,
        boxInfo: {
            boxImage: boxLegendaryImage,
            charactersImage: legendaryAvatars,
            characterChance: 100,
            olympChance: 60,
            olymp: '1600-6400',
            stoneChance: 50,
            powderChance: 100,
            powder: '160-400',
            goldCharacter: 60,
            diamondCharacter: 20
        }
    }
]

export const timeToTrain = 3600000

export const notifications = [
    {
        id: "jyfguguihuii",
        time: "3 hrs ago", 
        text: "Achilles 1 came back from training with 240 powder"
    },
    {
        id: "asdasdslmcsd",
        time: "6 hrs ago", 
        text: "Evolving stone created"
    }
]

export const  stoneNumberOptions: IOption[] = [
    {
        label: "1 stone",
        value: "1"
    },
    {
        label: "2 stones",
        value: "2"
    },
    {
        label: "3 stones",
        value: "3"
    },
    {
        label: "4 stones",
        value: "4"
    },
    {
        label: "5 stones",
        value: "5"
    },
    {
        label: "6 stones",
        value: "6"
    },
    {
        label: "7 stones",
        value: "7"
    },
    {
        label: "8 stones",
        value: "8"
    },
    {
        label: "9 stones",
        value: "9"
    },
    {
        label: "10 stones",
        value: "10"
    }
]

export const trainingOptions: IOption[] = [
    {
        label: "1 day",
        value: "1"
    },
    {
        label: "2 days",
        value: "2"
    },
    {
        label: "3 days",
        value: "3"
    }
]

export const priceOptions: IOption[] = [
    {
        label: 'Lowest price',
        value: ESortOption.LOWEST_PRICE
    },
    {
        label: 'Highest price',
        value: ESortOption.HIGHEST_PRICE
    }
]

export const levelScale = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven'
}
