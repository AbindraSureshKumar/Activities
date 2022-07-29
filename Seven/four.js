class Uber
{
    constructor(typeOfVehicle,distance)
    {
        this.typeOfVehicle=typeOfVehicle;
        this.distance=distance;
    }
    price()
    {
        if(this.typeOfVehicle === 'sedan')
        return `Trip of ${this.distance} units in ${this.typeOfVehicle} costs ${15*this.distance}`;
        return `Trip of ${this.distance} units in ${this.typeOfVehicle} costs ${10*this.distance}`;
    }
}
var c1 = new Uber("sedan",20);
var c2 = new Uber("mini",20);
console.log(c1.price());
console.log(c2.price());
