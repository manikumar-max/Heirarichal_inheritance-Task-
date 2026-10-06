// this is used as non-static keyword to access variables in class

// class Test{
//     name = "mani";
//     m1(){
//         console.log("my name is ",this.name);
//     }
//     m2(){
//         console.log("my name is ",this.name);
//     }
// }

// let t1 = new Test();
// t1.m2();
// t1.m1();

// let t2 = new Test();
// t2.m2();

// outside the class

// class Test2{
//     myName = "mani";
//     m1(){
//         console.log("my name is",this.myName);
//     }
// }

// let obj1 = new Test2();
// console.log("this is my name",obj1.myName);
// obj1.m1();

// use instance variable in another class
// class Test1{
//     myName = "hero";
// }
// class Test2{
//     m1(){
//         let obj1 = new Test1();
//         console.log("my name is ",obj1.myName);
//     }
// }

// let obj2 = new Test2();
// obj2.m1();

// use instance variable in another class with this keyword

// class Test1{
//     myName = "hero";
// }
// class Test2{
//     obj1 = new Test1();
//     m1(){
//         console.log("my name is ",this.obj1.myName);
//     }
// }

// let obj2 = new Test2();
// obj2.m1();

// create instance variables outside the class with the help of objects.

// class Test{
//     display(){
//         console.log("hello this is my name by getting the outside object varaibles",this.name);
//         console.log("age",this.age);
//         console.log("height",this.height)
//     }
// }

// let obj1 = new Test();
// obj1.name = "Hero";
// obj1.age = 20;
// obj1.height = 5.8;
// obj1.display();

// let obj2 = new Test();
// obj2.name = "hero prabhas";
// obj2.age = 50;
// obj2.height = 6.3;
// obj2.display();

// another example

// class Example{
//     displayDetails(){
//         console.log("name :",this.name);
//         console.log("age :",this.age);
//         console.log("course :",this.course);
//     }
// }

// let obj1 = new Example();
// obj1.name = "'sai'";
// obj1.age = 25;
// obj1.course = "python";
// obj1.displayDetails();

// console.log("===========================")

// let obj2 = new Example();
// obj2.name = "'venkat'";
// obj2.age = 27;
// obj2.course = "java";
// obj2.displayDetails();

// creating instance variables with in the method of the class and assigning values to it by invoking that method

// class Student{
//     set_Data(name,age,course){
//         this.myName = name;
//         this.myAge = age;
//         this.myCourse = course;
//     }
//     displayDetails(){
//         console.log("my name is :",this.myName);
//         console.log("my age is :",this.myAge);
//         console.log("my course is :",this.myCourse);
//     }
// }

// let obj1 = new Student();
// obj1.set_Data("hero",21,"python");
// obj1.displayDetails();

// console.log("=========================");

// let obj2 = new Student();
// obj2.set_Data("mani",23,"java");
// obj2.displayDetails();

// class Bank {
//     static bankName = "Inno Bank";
//     setData(accHolderName,accNumber,accBalance){
//         this.accHolderName=accHolderName;
//         this.accNumber=accNumber;
//         this.accBalance=accBalance;
//     }
//     displayData(){
//         console.log("your bank name is",Bank.bankName);
//         console.log("your name is",this.accHolderName)
//         console.log("your name is",this.accNumber);
//         console.log("your name is",this.accBalance);
//     }
// }

// let user1 = new Bank();
// user1.setData("mani",1234,150000);
// user1.displayData();
// console.log("======================");


// let user2 = new Bank();
// user2.setData("kumar",1432,100000);
// user2.displayData();

// console.log("======================");

// let user3 = new Bank();
// user3.setData("Hero",4321,980000);
// user3.displayData();

//  By using constructor also we can create instance variables and we can pass them immediate when new object created.

class Greet{
    static introduce = "my name is'mani'";
    constructor(a,b,c,d,e){
        console.log(Greet.introduce);
        this.a = a
        this.b = b
        this.c = c
        this.d = d
        this.e = e
    }
}
let greet1 = new Greet("hi","hello","how are you","how u doing","is it alright!");
console.log(greet1.a)
console.log(greet1.b)
console.log(greet1.c)
console.log(greet1.d)
console.log(greet1.e)



// task is do 5 classes with 3 different static variables in it and 5 instance variables and 2 new objects
// do this task in notes also and put that notes pic in discord.