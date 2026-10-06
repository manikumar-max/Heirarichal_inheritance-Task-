// class Parent{
//     brave(){
//         console.log("I am brave");
//     }
//     talent(){
//         console.log("I am talented");
//     }
// };

// // Inheritance
// class Child extends Parent{
//     artist(){
//         console.log("I am Artist");
//     }
// }
// let c = new Child();
// c.artist();  // own (sub-child method)
// c.brave(); // Parent (super)

// class A {
//     m1(){
//         console.log("m1 from A - super");
//     }
// }

// class B extends A{
//     m2(){
//         console.log("m2 From B");
//     }
// }

// let obj1 = new B();
// obj1.m2();
// obj1.m1();

// class Parent {
//     static ins_name = "Innomatics";

// }
// class Child extends Parent{
    
// }

// console.log("Institute name using parent",Parent.ins_name);
// console.log("Institute name using Child",Child.ins_name);

// class Product{
//     displayDetails(){
//         console.log("Product Name : ",this.name);
//         console.log("Product price : ",this.price);
//     }
// }

// let p = new Product();
// p.name = "Product 1";
// p.price = 95000;
// // p.displayDetails();

// class Laptop extends Product{

// }

// let l = new Laptop();
// l.displayDetails();


// class Product{
//     displayDetails(){
//         console.log("Product Name : ",this.name);
//         console.log("Product price : ",this.price);
//     }
// }

// let p = new Product();
// // p.name = "Product 1";
// // p.price = 95000;
// // p.displayDetails();

// class Laptop extends Product{
//     display_Lap_details(){
//         console.log("ram = ",this.ram);
//     }
// }

// let l = new Laptop();
// l.name = "Product 1";
// l.price = 95000;
// l.ram = "12 GB"
// l.displayDetails();
// l.display_Lap_details();


// class Product{
//     constructor(product1,price){
//         this.product1 = product1;
//         this.price = price;
//     }
//     // displayDetails(){
//     //     console.log("Product Name : ",this.product1);
//     //     console.log("Product price : ",this.price);
//     // }
// }

// let p = new Product("product1",95000);
// // p.displayDetails();

// class Laptop extends Product{
//     constructor(){
//         super();
//     }
//     m1(){
//         console.log(this.price)
//     }
// }
// let lap = new Laptop();
// // lap.displayDetails();
// lap.m1();


// class Product{
//     constructor(product1,price){
//         this.product1 = product1;
//         this.price = price;
//     }
//     displayDetails(){
//         console.log("Product Name : ",this.product1);
//         console.log("Product price : ",this.price);
//     }
// }

// class Laptop extends Product{
//     constructor(product1,price,ram){
//         super(product1,price);
//         this.ram = ram;
//     }
//     displayLapDetails(){
//         super.displayDetails();
//         console.log("this is the ram ",this.ram);
//     }
// }
// let lap = new Laptop("Laptop",85000,"12 GB");
// lap.displayLapDetails();

// class ParentStaticVariable{
//     static personName = "mani";
// }
// class ChildStaticVariable extends ParentStaticVariable{
//     m0(){
//         console.log("this is parent0",ParentStaticVariable.personName)
//         console.log("this is child0 ", ChildStaticVariable.personName)
//     }
// }
// let obj0 = new ChildStaticVariable();
// obj0.m0();

// class ParentInstanceVariable{
//     constructor(){
//         this.personName = "mani";
//     }
// }
// class ChildInstanceVariable extends ParentInstanceVariable{
//     constructor(){
//         super();
//     }
//     m1(){
//         console.log(this.personName)
//     }
// }
// let obj = new ChildInstanceVariable();
// obj.m1();

// class Product{
//     constructor(product0,price){
//         this.product0 = product0;
//         this.price = price;
//     }
//     displayDetails(){
//         console.log("Product Name : ",this.product0);
//         console.log("Product price : ",this.price);
//     }
// }

// class Laptop extends Product{
//     constructor(product1,price,ram){
//         super(product1,price);
//         this.ram = ram;
//     }
//     displayLapDetails(){
//         super.displayDetails();
//         console.log("this is the ram ",this.ram);
//         console.log("this is Child class ",this.product0)
//     }
// }
// let lap = new Laptop("Laptop",85000,"12 GB");
// lap.displayLapDetails();

class Parent{
    constructor(fname){
        this.fname = fname
    }
    displayDetails(){
        console.log(this.fname);
    }
}
class Child extends Parent{
    constructor(name){
        super(name);
    }
    displayDetailsOfChild(){
        super.displayDetails();
        console.log(this.fname);
    }
}

let obj1 = new Child("mani");
obj1.displayDetails();
obj1.displayDetailsOfChild();