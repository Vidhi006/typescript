"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//primitive datatype
let a;
a = 5;
//a ="Nitesh"  //a cant be String 
a = 10;
console.log(a);
let b;
b = true;
console.log(b);
let obj = {
    name: "Vidhi",
    age: 21
};
console.log(obj.age);
function isAllowed(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(isAllowed(obj.age));
//how to provide function return type 
// funtion Sum(a:number,b:string):number{
//     return a+b;
// }
// Sum(1,"2") // it returns string 12 but return type to number h isiliye error aa rha h
function sum(a, b) {
    return a + b;
}
console.log(sum(1, "2")); // by default its datatype is any
//# sourceMappingURL=index.js.map