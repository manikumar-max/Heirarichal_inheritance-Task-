//  first two without constructor in child class.

// class Metal{
//     constructor(shape,size,quantity){
//         this.shape = shape;
//         this.size = size;
//         this.quantity = quantity;
//     }
//     display(){
//         console.log("your shape of the object is : ",this.shape);
//         console.log("your size of the object is :",this.size);
//         console.log("your quantity of the object is : ",this.quantity);
//     }
// }

// class Gold extends Metal{
//     metal = "gold"
//     displayGold(){
//         console.log("my metal is : ",this.metal);
//     }
// }

// class Iron extends Metal{
//     metal = "iron";
//     displayIron(){
//         console.log("my metal is : ",this.metal)
//     }
// }

// let obj1 = new Gold("bar","small",100);
// obj1.display()
// obj1.displayGold()

// let obj2 = new Iron("cylinder","large",120);
// obj2.display();
// obj2.displayIron();

// class Vehicle {
//     constructor(brand, color, maxSpeed) {
//         this.brand = brand;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//     }

//     displayVehicle() {
//         console.log("Brand:", this.brand);
//         console.log("Color:", this.color);
//         console.log("Top Speed:", this.maxSpeed, "km/h");
//     }
// }

// class Car extends Vehicle {
//     type = "Four Wheeler";

//     displayCar() {
//         console.log("Vehicle Type:", this.type);
//     }
// }

// class Bike extends Vehicle {
//     type = "Two Wheeler";

//     displayBike() {
//         console.log("Vehicle Type:", this.type);
//     }
// }

// let myCar = new Car("Toyota", "White", 180);
// myCar.displayVehicle();
// myCar.displayCar();

// let myBike = new Bike("Yamaha", "Black", 120);
// myBike.displayVehicle();
// myBike.displayBike();

// the other three examples with constructor in child class.
// ex - 3;

// class FoodOrder {
//     constructor(orderId, itemName, billAmount) {
//         this.orderId = orderId;
//         this.itemName = itemName;
//         this.billAmount = billAmount;
//     }

//     displayOrder() {
//         console.log("Order ID:", this.orderId);
//         console.log("Item:", this.itemName);
//         console.log("Total Bill: ₹" + this.billAmount);
//     }
// }

// class DineIn extends FoodOrder {
//     constructor(orderId, itemName, billAmount, tableNumber) {
//         super(orderId, itemName, billAmount);
//         this.tableNumber = tableNumber;
//     }

//     displayDineIn() {
//         console.log("Table Number:", this.tableNumber);
//     }
// }

// class Takeaway extends FoodOrder {
//     constructor(orderId, itemName, billAmount, pickupTime) {
//         super(orderId, itemName, billAmount);
//         this.pickupTime = pickupTime;
//     }

//     displayTakeaway() {
//         console.log("Pickup Time:", this.pickupTime);
//     }
// }

// let order1 = new DineIn(101, "Biryani", 350, 4);
// order1.displayOrder();
// order1.displayDineIn();

// let order2 = new Takeaway(102, "Pizza", 500, "7:30 PM");
// order2.displayOrder();
// order2.displayTakeaway();

// ex - 4;
// class BankAccount {
//     constructor(accountHolder, balance) {
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     displayAccount() {
//         console.log("Account Holder:", this.accountHolder);
//         console.log("Current Balance: ₹" + this.balance);
//     }
// }

// class SavingsAccount extends BankAccount {
//     constructor(accountHolder, balance, interestRate) {
//         super(accountHolder, balance);
//         this.interestRate = interestRate;
//     }

//     displaySavings() {
//         console.log("Interest Rate:", this.interestRate + "%");
//     }
// }

// class CurrentAccount extends BankAccount {
//     constructor(accountHolder, balance, businessName) {
//         super(accountHolder, balance);
//         this.businessName = businessName;
//     }

//     displayCurrent() {
//         console.log("Business Name:", this.businessName);
//     }
// }

// let acc1 = new SavingsAccount("Rahul", 25000, 4);
// acc1.displayAccount();
// acc1.displaySavings();

// let acc2 = new CurrentAccount("Ankit", 150000, "Tech Solutions");
// acc2.displayAccount();
// acc2.displayCurrent();

// ex - 5;
class Employee {
    constructor(empName, empId, basicSalary) {
        this.empName = empName;
        this.empId = empId;
        this.basicSalary = basicSalary;
    }

    displayEmployee() {
        console.log("Name:", this.empName);
        console.log("ID:", this.empId);
        console.log("Basic Salary: ₹" + this.basicSalary);
    }
}

class Developer extends Employee {
    constructor(empName, empId, basicSalary, codingLanguage) {
        super(empName, empId, basicSalary);
        this.codingLanguage = codingLanguage;
    }

    displayDeveloper() {
        console.log("Primary Language:", this.codingLanguage);
    }
}

class Manager extends Employee {
    constructor(empName, empId, basicSalary, teamSize) {
        super(empName, empId, basicSalary);
        this.teamSize = teamSize;
    }

    displayManager() {
        console.log("Team Size:", this.teamSize, "members");
    }
}

let emp1 = new Developer("Priya", "DEV01", 60000, "JavaScript");
emp1.displayEmployee();
emp1.displayDeveloper();

let emp2 = new Manager("Vikram", "MGR01", 95000, 10);
emp2.displayEmployee();
emp2.displayManager();