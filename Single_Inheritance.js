// creating instance variable with in the class outside the method
// class Test1 {
//     fname = "mani";
// }
// class Test2 extends Test1{

// }

// let obj1 = new Test2();
// console.log(obj1.fname);

// creating instance variable with the parent object
// class Test1 {
//     fname = "mani";
// }
// let obj0 = new Test1();
// obj0.age = 15;
// class Test2 extends Test1{

// }

// let obj1 = new Test2();
// console.log(obj1.fname);
// console.log(obj1.age);

// creting instance variable in the class in method();
// class Test1 {
//     m1(){
//         this.fname = "mani";
//     }
// }

// class Test2 extends Test1{

// }

// let obj1 = new Test2();
// obj1.m1();
// console.log(obj1.fname);

// creating instance variables in Parent class constructors and accessing in child class.
class Test1 {
    constructor(){
        this.fname = "mani";
    }
}

class Test2 extends Test1{

}

let obj1 = new Test2();
console.log(obj1.fname);