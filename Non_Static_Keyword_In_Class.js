// class Test {
//     m1() {
//         console.log("I am Instance Method-m1 of Test");
//     }
// }

// // Test.m1(); //wrong
// // creating Object
// // new Test().m1();
// // t --> object reference variable
// let t = new Test();
// t.m1();

// // with out arguments and return
// class Developer {
//     displayDesignation() {
//         console.log("I am a fullstack developer")
//     }
// }

// let d = new Developer();
// d.displayDesignation();

// class Bycycle{
//     start(){
//         console.log(" Engine started")
//     }
// }

// let a = new Bycycle();
// a.start();

// class Student{
//     displayStudentMarks(marks){
//         console.log("Hey student this is your marks",marks);
//     }
// }

// let mani = new Student();
// mani.displayStudentMarks(100);

// class Employee{
//     displayEmployeeDepartment(){
//         return "your department is 'Technical'";
//     }
// }

// let kumar = new Employee();
// console.log(kumar.displayEmployeeDepartment());

// class TotalSalary{
//     calculateSalary(a,b){
//         return `your Basic salary is :${a-b}`
//     }
// }

// let emp1 = new TotalSalary();
// console.log(emp1.calculateSalary(100000,15000));

class ProductMobile{
    displayDetailsOfProduct(){
        console.log("Brand : 'Apple'")
        console.log("Model : '18 pro max'")
        console.log("Ram : '16 GB'")
    };
    displayQuantityOfProducts(num){
        console.log(`the total quantity in the stock is ${num}`);
    };
    displayPriceOfTheProduct(){
        return `the price of single product is : ${2000}`;
    };
    displayTotalAmont(a){
        return `the total amount for your quantity is ${a*2000}`
    }
}

let purchase1 = new ProductMobile();
purchase1.displayDetailsOfProduct();
purchase1.displayQuantityOfProducts(3);
console.log(purchase1.displayPriceOfTheProduct());
console.log(purchase1.displayTotalAmont(2));