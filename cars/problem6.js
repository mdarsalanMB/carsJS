
const cars = function (inventory, arr) {
    for (let i = 0; i < inventory.length - 1; i++) {
        if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi')
            arr.push(inventory[i]);
    }
    return arr;
}



module.exports = cars;

