class Circle
{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    getRadius()
    {
        console.log(`The Radius of circle is ${this.radius} units`);
    }
    getColor()
    {
        console.log(`The color of circle is ${this.color}`);
    }
    getArea()
    {
        console.log(`The area of the circle is ${3.14*this.radius*this.radius}`);
    }
    getCircumference()
    {
        console.log(`the circumference of the circle is ${2*3.14*this.radius}`);
    }
}
var c1 = new Circle(25,"red");
c1.getColor();
c1.getRadius();
c1.getCircumference();
c1.getArea();
