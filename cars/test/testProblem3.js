const inventory = require('../inventory');
const sorting = require('../problem3');

let sortCars = [];
sorting(inventory, sortCars);
for (let i = 0; i < sortCars.length - 1; i++) {
    console.log(sortCars[i]);
}