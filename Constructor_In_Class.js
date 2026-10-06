//  creating Constructor(Instance Method) in class

// class Test{
//     constructor(){
//         console.log(" I am a constructor");
//     }
// }

// let t = new Test();

// class Test2{
//     constructor(name){
//         console.log("I am from constructor and my name is",name);
//     }
// }

// let t1 = new Test2("constructor mani");

// class Test2{
//     constructor(name,age,height){
//         console.log("I am from constructor and my name is",name);
//         console.log("I am from constructor and my age is",age);
//         console.log("I am from constructor and my height is",height);
//     }
// }

// let t1 = new Test2("constructor mani",23,5.8);

// class Test{
//     constructor(name){
//         return {name : "mani",}
//     }
// }

// let t = new Test("mani");
// console.log(t);

// class Test{
//     constructor(name){
//         return name
//     }
// }

// let name = {
//     name : "mani",
//     age : 23,
// }
// let t = new Test(name);
// console.log(t);

class Test{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    displatDetails(){
        console.log("hello my name is",this.name);
    }
}

let t = new Test("mani",23);
t.displatDetails();
console.log("hello my age is ",t.age);

// class Employee{
//     constructor(name,designation,salary){
//         this.name = name;
//         this.designation = designation;
//         this.salary = salary;
//     }
//     displatDetails(){
//         console.log("my name is ",this.name);
//         console.log("my designation is ",this.designation);
//         console.log("my salary is ",this.salary);
//     }
// }

// let employee1 = new Employee("mani","full stack developer",150000);
// employee1.displatDetails();

class Employee{
    constructor(name,designation,salary){
       return { name : name,
        designation : designation,
        salary : salary,}
    }
}

let employee1 = new Employee("mani","full stack developer",150000);
console.log(employee1);