const carYear = require('./problem4');
const sumCars = function (inventory, arrOld) {

    let arr = [];
    carYear(inventory,arr);

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < 2000)
            arrOld.push(arr[i]);
    }
    return arrOld;

}


module.exports = sumCars;
