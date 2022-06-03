const inventory = require ("../inventory");
const lastCar = require ('../problem2');

let car=[];
lastCar(inventory,car);
console.log('Last Car is a'+ ' '+car[0]+ ' '+ car[1]);
