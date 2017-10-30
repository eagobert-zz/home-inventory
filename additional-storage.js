//Load the database from local storage
const storedInventory = localStorage.getItem("homeInventory");

//Use JSON.parse to read the data
let homeInventory = JSON.parse(storedInventory);

//Add one new object in furniture, electronics, and artwork.

const diningTable = {
    "name": "Dining Table",
    "type": 'furniture',
    "location": "dining room",
    "description": "Expresso colored dining table from Ashley furniture"
}

const aromatherapyMachine = {
    "name": "Aromatherapy Mister",
    "type": 'electronics',
    "location": "master bedroom",
    "description": "Expresso colored dining table from Ashley furniture"
}

const inspirationalPoster = {
    "name": "Inspirational Poster",
    "type": 'artwork',
    "location": "master bedroom",
    "description": "Poster printed with inspirational sayings"
}

furniture.push(diningTable)
electronics.push(aromatherapyMachine)
artwork.push(inspirationalPoster)

//Store database back to local storage
const homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)