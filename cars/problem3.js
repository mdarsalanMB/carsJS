
const sorting = function (inventory,sortCars) {


    for (let i = 0; i < inventory.length- 1; i++) {
        sortCars.push(inventory[i].car_model);
    }
    sortCars.sort();

    return sortCars;
}


module.exports = sorting;