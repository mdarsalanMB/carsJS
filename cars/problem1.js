
const information = function (inventory, car) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === 33) {
            car.push(inventory[i].car_year);
            car.push(inventory[i].car_make);
            car.push(inventory[i].car_model);
            return car;
        }

    }
}

module.exports = information;
