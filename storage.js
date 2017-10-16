//Define each item in my home as an object

const hutch = {
    "name": "Mid-Century Hutch",
    "type": 'furniture',
    "location": "dining room",
    "description": "My grandmother's dining hutch"
}

const bed = {
    "name": "Queen Bed",
    "type": 'furniture',
    "location": "master bedroom",
    "description": "Queen size bed in master bedroom"
}

const couch = {
    "name": "Mid-Century Couch",
    "type": 'furniture',
    "location": "living room",
    "description": "Couch in my favorite shade of green"
}

const fourKTV = {
    "name": "55 inch Samsung 4K TV",
    "type": 'electronics',
    "location": "living room",
    "description": "Television in living room"
}

const fourKXbox = {
    "name": "Xbox One S",
    "type": 'electronics',
    "location": "living room",
    "description": "Xbox One S with 4k "
}

const pearPainting = {
    "name": "Painting with Pear",
    "type": 'artwork',
    "location": "kitchen",
    "description": "Painting with pear - 1 of 2"
}

const orangePainting = {
    "name": "Painting with Orange",
    "type": 'artwork',
    "location": "kitchen",
    "description": "Painting with orange - 2 of 2"
}

const chair = {
    "name": "Mid-Century Chair",
    "type": 'furniture',
    "location": "living room",
    "description": "Chair in my favorite shade of green"
}

const macBook = {
    "name": "MacBook Pro Laptop",
    "type": 'electronics',
    "location": "master bedroom",
    "description": "My essential working laptop"
}

const bookShelf = {
    "name": "Two-shelf bookcase",
    "type": 'furniture',
    "location": "living room",
    "description": "My 2-shelf bookcase that holds whatever"
}

//Define arrays for each type

let furniture = []
let electronics = []
let artwork = []

//Place each object defined into the appropriate array

furniture.push(bookShelf)
furniture.push(chair)
furniture.push(couch)
furniture.push(bed)
furniture.push(hutch)

electronics.push(macBook)
electronics.push(fourKXbox)
electronics.push(fourKTV)

artwork.push(pearPainting)
artwork.push(orangePainting)

//Define "Home Inventory" database

let HomeInventory = {
    "furniture": furniture,
    "electronics": electronics,
    "artwork": artwork
}

//Create a local storage data using JSON.stringify to store

const homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)

//Use JSON.parse to Read the Data

const storedInventory = localStorage.getItem("homeInventory")

let homeInventory = JSON.parse(storedInventory)


//Still working on 2nd JavaScript file called additional-storage.js

