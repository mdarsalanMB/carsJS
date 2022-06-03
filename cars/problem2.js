
const lastCar = function (inventory,car) {
    car.push(inventory[inventory.length - 1].car_make);
    car.push(inventory[inventory.length - 1].car_model);
    return car;

}
module.exports = lastCar;
