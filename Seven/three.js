class Person
{
    constructor(name,height,weight,aadhar_id)
    {
        this.name=name;
        this.height=height;
        this.weight=weight;
        this.aadhar_id = aadhar_id;
    }
    getDetails()
    {
        console.log(`name:${this.name}
height : ${this.height}
weight : ${this.weight}
aadhar id : ${this.aadhar_id}`);
    }
}
var p1 = new Person("john","12","21",123456789);
p1.getDetails();
