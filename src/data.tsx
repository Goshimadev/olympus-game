import { uniqueId } from "lodash";
import stoneImage from "../src/images/evolving-stone-marketplace.png";
import commonChestImage from "../src/images/common-chest-marketplace.png";
import uncommonChestImage from "../src/images/uncommon-chest-marketplace.png";
import rareChestImage from "../src/images/rare-chest-marketplace.png";
import legendaryChestImage from "../src/images/legendary-chest-marketplace.png";
import achillesImage from "../src/images/achilles-marketplace.png";
import medusaImage from "../src/images/medusa-marketplace.png";
import apolonImage from "../src/images/apolon-marketplace.png";
import chimeraImage from "../src/images/chimera-marketplace.png";
import titanImage from "../src/images/titan-marketplace.png";
import zeusImage from "../src/images/zeus-marketplace.png";
import stoneImageItem from "../src/images/evolving-stone-item.png";
import commonBoxImageItem from "../src/images/common-chest-item.png";
import uncommonBoxImageItem from "../src/images/uncommon-chest-item.png";
import rareBoxImageItem from "../src/images/rare-chest-item.png";
import legendaryBoxImageItem from "../src/images/legendary-chest-item.png";
import achillesImageItem from "../src/images/achilles-item.png";
import apolonImageItem from "../src/images/apolon-item.png";
import zeusImageItem from "../src/images/zeus-item.png";
import { IMarketItem } from "./interfaces";


export const getDataById = (id: string) => {
    return data.find(x => x.id === id)
}

export const addToCollection = (data: IMarketItem) => {
    collection.push(data)
    return
}

export const data: IMarketItem[] = [
    {
        id: uniqueId("es_"),
        collection: 1,
        name: "evolving stone", 
        price: 6,
        rarity: "common",
        category: "evolving_stones",
        level: null,
        image: stoneImage,
        type: "sale",
        imageItem: stoneImageItem,
        pastAuction: true
    },
    {
        id: uniqueId("chests_"),
        collection: 1,
        name: "common box", 
        price: 250,
        rarity: "common",
        category: "chests",
        level: null,
        image: commonChestImage,
        type: "sale",
        imageItem: commonBoxImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("chests_"),
        collection: 1,
        name: "uncommon box", 
        price: 80,
        rarity: "uncommon",
        category: "chests",
        level: null,
        image: uncommonChestImage,
        type: "sale",
        imageItem: uncommonBoxImageItem,
        pastAuction: true
    },
    {
        id: uniqueId("chests_"),
        collection: 1,
        name: "rare box", 
        price: 100,
        rarity: "rare",
        category: "chests",
        level: null,
        image: rareChestImage,
        type: "auction",
        imageItem: rareBoxImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("chests_"),
        collection: 1,
        name: "legendary box", 
        price: 200,
        rarity: "legendary",
        category: "chests",
        level: null,
        image: legendaryChestImage,
        type: "auction",
        imageItem: legendaryBoxImageItem,
        pastAuction: false
    },
    
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "zeus", 
        price: 250,
        rarity: "common",
        category: "characters",
        level: 1,
        image: zeusImage,
        type: "auction",
        imageItem: zeusImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "zeus", 
        price: 250,
        rarity: "gold",
        category: "characters",
        level: 4,
        image: zeusImage,
        type: "auction",
        imageItem: zeusImageItem,
        pastAuction: true
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "zeus", 
        price: 250,
        rarity: "diamond",
        category: "characters",
        level: 7,
        image: zeusImage,
        type: "sale",
        imageItem: zeusImageItem,
        pastAuction: false
    },

    {
        id: uniqueId("char_"),
        collection: 1,
        name: "achilles", 
        price: 250,
        rarity: "common",
        category: "characters",
        level: 1,
        image: achillesImage,
        type: "sale",
        imageItem: achillesImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "achilles", 
        price: 250,
        rarity: "gold",
        category: "characters",
        level: 3,
        image: achillesImage,
        type: "sale",
        imageItem: achillesImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "achilles", 
        price: 250,
        rarity: "diamond",
        category: "characters",
        level: 5,
        image: achillesImage,
        type: "auction",
        imageItem: achillesImageItem,
        pastAuction: false
    },

    {
        id: uniqueId("char_"),
        collection: 1,
        name: "medusa", 
        price: 250,
        rarity: "diamond",
        category: "characters",
        level: 5,
        image: medusaImage,
        type: "auction",
        imageItem: '',
        pastAuction: true
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "medusa", 
        price: 250,
        rarity: "gold",
        category: "characters",
        level: 4,
        image: medusaImage,
        type: "auction",
        imageItem: '',
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "medusa", 
        price: 250,
        rarity: "common",
        category: "characters",
        level: 2,
        image: medusaImage,
        type: "sale",
        imageItem: '',
        pastAuction: false
    },

    {
        id: uniqueId("char_"),
        collection: 1,
        name: "chimera", 
        price: 80,
        rarity: "diamond",
        category: "characters",
        level: 7,
        image: chimeraImage,
        type: "sale",
        imageItem: '',
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "chimera", 
        price: 80,
        rarity: "gold",
        category: "characters",
        level: 3,
        image: chimeraImage,
        type: "sale",
        imageItem: '',
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "chimera", 
        price: 60,
        rarity: "common",
        category: "characters",
        level: 2,
        image: chimeraImage,
        type: "sale",
        imageItem: '',
        pastAuction: true
    },

    {
        id: uniqueId("char_"),
        collection: 1,
        name: "apolon", 
        price: 150,
        rarity: "common",
        category: "characters",
        level: 1,
        image: apolonImage,
        type: "auction",
        imageItem: apolonImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "apolon", 
        price: 50,
        rarity: "gold",
        category: "characters",
        level: 3,
        image: apolonImage,
        type: "auction",
        imageItem: apolonImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "apolon", 
        price: 340,
        rarity: "diamond",
        category: "characters",
        level: 6,
        image: apolonImage,
        type: "auction",
        imageItem: apolonImageItem,
        pastAuction: false
    },

    {
        id: uniqueId("char_"),
        collection: 1,
        name: "titan", 
        price: 110,
        rarity: "common",
        category: "characters",
        level: 2,
        image: titanImage,
        type: "sale",
        imageItem: '',
        pastAuction: true
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "titan", 
        price: 220,
        rarity: "gold",
        category: "characters",
        level: 4,
        image: titanImage,
        type: "sale",
        imageItem: '',
        pastAuction: true
    },
    {
        id: uniqueId("char_"),
        collection: 1,
        name: "titan", 
        price: 280,
        rarity: "diamond",
        category: "characters",
        level: 6,
        image: titanImage,
        type: "auction",
        imageItem: '',
        pastAuction: false
    }
]

export const collection: IMarketItem[] = [
    {
        id: uniqueId("coll_"),
        collection: 1,
        name: "achilles", 
        price: 250,
        rarity: "diamond",
        category: "characters",
        level: 5,
        image: achillesImage,
        type: "auction",
        imageItem: achillesImageItem,
        pastAuction: false
    },
    {
        id: uniqueId("coll_"),
        collection: 1,
        name: "apolon", 
        price: 250,
        rarity: "common",
        category: "characters",
        level: 1,
        image: apolonImage,
        type: "auction",
        imageItem: apolonImageItem,
        pastAuction: false
    }
]