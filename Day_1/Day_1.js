// Overview of JavaScript and its use cases
// Setting up the development environment (VSCode, Node.js)
// Basic syntax: variables (var, let, const), data types (string, number, boolean,
// null, undefined, object), operators (arithmetic, comparison, logical)


console.log("Hello Payal");

let a = 10 // a contains 67

console.log(a)
a = "herry"
console.log(a)

console.log("javascript tutorial: var , let , const");

// var is globally scoped , let and const are block scoped
// var an be updated and redeclared withn its scope
// let is block scoped

let b = "herry";
var c = 8;
var l = 2;
b = 6;
{
    let l = "hello";
    console.log(l)
}

console.log(b)
console.log(l);

//const niether be updated and nor be redeclared
const author = "today"
//const must be initization

//7 Primitive data types
// nn ss bb u
let n = null;
let o = 33;
let p = true
let q = "tuesday"
let r = Symbol("hello")
let s = BigInt(2)+ BigInt(3)
let t = undefined
console.log(n,o,p,q,r,s,t)
console.log(typeof r)

//Objects works as as key value pair in javascript and We can say non primitive data type 

const item ={
    "herry" : true,
    "shubh": false,
        f: 5

}
console.log(item["f"])

//Operators
//Arthimetic Operators
let u = 4
let v = 6
console.log("u+v" , u+v)
console.log("u-v" , u-v)
console.log("u*v" , u*v)
console.log("u/v" , u/v)
console.log("u%v" , u%v)
 console.log("++u" , ++u)
console.log("u--" ,u--)

//Assignment oprator 
 let w = 3
   w*= 3
console.log(w)

//Comparision operators
let comp1 = 4
let comp2  = 5
console.log("comp1 == comp2" , comp1 == comp2)
console.log("comp1 != comp2" , comp1 != comp2)

//Logical Operators
let logical1 = 5;
let logical2 = 7
console.log(logical1 > logical2 && logical1 < logical2) 
console.log(logical1 > logical2 || logical1 > logical2) 
console.log(!false)
console.log(!true);