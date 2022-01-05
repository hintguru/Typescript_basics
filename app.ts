/* 
-> The typescript is superset of javascript.
-> It is the javascript with types and some other feactures like static typing, static-type checking
and live code compilation ( you see bugs in coding time ).
-> Broswer can't understand typescript but you can compile it into in javascript.
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
// const student = "Aniket" as string;          ---- Write it after value of variable and othre.
