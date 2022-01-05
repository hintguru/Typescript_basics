/* 
-> The typescript is superset of javascript.
-> It is the javascript with types and some other feactures like static typing, static-type checking
    and live code compilation ( you see bugs in coding time ).
-> Broswer can't understand typescript but you can compile it into in javascript. And compiled typescript is a javascript we
    use it any where.
-> You use typescript with react, node and many more.
*/
//-------------- define the types of variables ------------------------//
// const name: string = "Aniket"
// const age: number = 17
// const bool: boolean = true

//If we need some have string or number then define it like
// const name: string | number = "Aniket"              ------ It is called as union

//---------------- define type of arrays ---------------------//
// const students: [string, number, string] = ["Aniket", 17, "typescript"]
// const student: string[] = ["Aniket", "Rutuja"]  -- It give type string for all values of array

//-------------------- define type of object -----------------------//
// type Student = {
//  name:string,
//  age:number,
//  favlanguage?:string       // ? this means this property is optional
// }

// const students:Student = {
//     name:"Aniket",
//     age:35,
// }

//--------------------- interface ----------------------//
// interface Student{
//  name:string,
//  age:number,
//  favlanguage?:string       // ? this means this property is optional
// }
//if extends students interface
// interface Guy extends Student{
//     profession:string             -- it not very useful
// }
// const students:Student = {
//  name:"Aniket",
//  age:35,
// }

//------------------- define type of function -----------------------//
// 1. function parameters
//  const student = (name: string, age: number) => {
//      console.log(`hello I am ${name} and my age is ${age}`)
//  }
//  student("Aniket", 17)

// 2. function type
// If function is return number then it define like
// const printnum: unknown = () => {
//     console.log("hello world!...")
// }

//-------------- Generics or type asseration -----------------//
// -> TypeScript infers and checks the type of a variable using some internal logic mechanism called Type Assertion.
// -> Type assertion allows you to set the type of a value and tell the compiler not to infer it. 
//It have two methode 
// 1. As syntax
// const student = "Aniket" as string;          ---- Write it after the value of variable, object and other.
// interface Student{
//  name:string,
//  age:number
// }

// const student = <Student>{}
// student.name = "Aniket"
// student.age = 17
// 2. angle-bracket 
// const student = <string> "Aniket";              ---- Write it before the value of variable, object and other.

// interface Student{
//     name:string,
//     age:number
// }
// const student = {} as Student
// student.name = "Aniket"
// student.age = 17

//------------------- Dom Manipulation -------------------//
// const h1:NodeListOf<HTMLHeadingElement> = document.querySelectorAll("h1"); --- we get type by hover on h1 and many more