//comparing two json obj1 and obj2 having same properties without order
//output will be true for equal and false for unequal
var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};
var flag;
if(Object.keys(obj1).length == Object.keys(obj2).length)
for(let i in obj1)
{
    if(obj1[i]!==obj2[i])
    flag=false;
}
if(flag != false)
flag=true;
console.log(flag)

//or else _.isEqual(obj1,obj2) function can be used in comparing the object by including the lodash

