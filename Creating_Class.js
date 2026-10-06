// NON-STATIC way of creating Objects with class or accessing the class data in a non-static way.

// class Car {
//   // Define fields using '=' (no keyword like let or const)
//   color = "black"; 

//   // Define methods directly (no ':' or function keyword)
//   start() {
//     console.log("car has started");
//   } 
// }

// // How to use it:
// const myCar = new Car();
// console.log(myCar.color); // Output: black
// myCar.start();            // Output: car has started

// when ever u wanted to create a class create class name with "PascalCase"
// static way of accessing the properties or methods in class.
class Car{
    color = "black" ;
    static start(){
         console.log("car has started");
    };
}
Car.start();

class Student{
    name = "mani";
    static talk(){
        console.log("student always talk...........")
    }
}

Student.talk();

class Greet {
    static sayHello() {
        console.log("Hello");
    }
}

Greet.sayHello();

class Institute{
    static instituteName(name){
        console.log("institute name",name);
    }
}

Institute.instituteName("innomatics")

// static method without input and with return
class Test{
    static add(){
        // return `${10+20}`;
        return 10+20;
    }
};

console.log("REsult ",Test.add())

// static method with input and with return
class DisplayName{
    static StudentName(name){
        return `your name is "${name}"`;
    }
}

console.log(DisplayName.StudentName("mani"))

// practice
class Operations{
    static add(){
        console.log(10+20);
    }
    static substraction(a,b){
        console.log(a-b);
    }
    static multiplication(){
        return 10*2;
    }
    static division(a,b){
        return a/b;
    }
}

Operations.add();
Operations.substraction(20,10);
console.log(Operations.multiplication());
console.log(Operations.division(10,2));