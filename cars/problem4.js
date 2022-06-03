
const carYear= function(inventory, arr)
{
    for(let i=0;i<inventory.length-1; i++)
    {
        arr.push(inventory[i].car_year);
    }
    return arr;
}

module.exports=carYear;



