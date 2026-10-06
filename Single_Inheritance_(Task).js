// // accessing Parent class data in child class without any cunstructor and super() in child class.
// class BoysHostel{
//     static hostelName = "SRI Hanuman Mens PG";
//     static hostelLocation = "K.P.H.B";
//     constructor(branchName,guestName,guestRoomNumber){
//         this.branchName = branchName;
//         this.guestName = guestName;
//         this.guestRoomNumber = guestRoomNumber;
//     }
//     displayDetails(){
//         this.advance = 2000;
//         console.log(BoysHostel.hostelName);
//         console.log(BoysHostel.hostelLocation);
//         console.log(`Hello HEAD Office , we are from ${this.branchName} Branch`);
//         console.log("we are enrolling new Guest Details");
//         console.log(`Our Guest Name is ${this.guestName}`);
//         console.log(`Our Guest Room number is ${this.guestRoomNumber}`);
//     }
// }

// class HostelSubBranch extends BoysHostel{
//     displayDetailsOfSubBranch(){
//         console.log("hey i am from child class accessing Parent data",this.advance);
//     }

// }

// let guest1 = new HostelSubBranch("ADDAGUTTA BRANCH","DR. VINEETH",13);
// guest1.displayDetails();
// guest1.displayDetailsOfSubBranch();

// Note: this is first example class only but conveying in a different way...
// class BoysHostel{
//     static hostelName = "SRI Hanuman Mens PG";
//     static hostelLocation = "K.P.H.B";
//     constructor(){
//         this.branchName = "Addagutta";
//         this.guestName = "Dr. VINEETH";
//         this.guestRoomNumber = 101;
//         this.advance = 2000;
//     }
//     displayDetailsOfHeadBranch(){
//         console.log("I am Parent class accessing Parent data through 'child class name'",HostelSubBranch.hostelName);
//         console.log(`Hello HEAD Office , we are from ${this.branchName} Branch`);
//         console.log("we are enrolling new Guest Details");
//     }
// }

// class HostelSubBranch extends BoysHostel{
//     displayDetails(){
//         console.log("I am child class accessing Parent data",BoysHostel.hostelLocation);
//         console.log(`Our Guest Name is ${this.guestName}`);
//         console.log(`Our Guest Room number is ${this.guestRoomNumber}`);
//         console.log("advance payment is",this.advance);
//     }
// }

// let guest1 = new HostelSubBranch("ADDAGUTTA BRANCH","DR. VINEETH",13);
// guest1.displayDetailsOfHeadBranch();
// guest1.displayDetails();

// single inheritance example 2--
// class UserLogin {
//     constructor(userName,userEmail){
//         this.userName = userName;
//         this.userEmail = userEmail;
//         console.log(`User email address is : `,this.userEmail);
//     }
//     login(){
//         console.log(`hello Data Base user ${this.userName} has logged in`);
//     }
// }

// class Admin extends UserLogin{
//     constructor(adminName,adminEmail,adminLevel){
//         super(adminName,adminEmail);
//         this.adminLevel = adminLevel;
//     }
//     loggedOut(){
//         super.login()
//         console.log(`Hey Data Base i am from child class accessing Parent data(email)`,this.userEmail);
//         console.log(`hello Data Base user ${this.userName} has logged out because of level : ${this.adminLevel}`);
//     }
// }

// let admin1 = new Admin("mani kumar","mani@gmail.com","low level");
// admin1.loggedOut();
// admin1.login();

// single inheritance example 3--
// class Pizza{
//     constructor(typeOfPizza,size,spicy){
//         this.typeOfPizza = typeOfPizza;
//         this.size = size;
//         this.spicy = spicy;
//     }
//     pizzaType(){
//         console.log("hey you choosen",this.typeOfPizza,"pizza");
//     }
//     size(){
//         console.log("hey your pizza size is",this.size,"size");
//     }
//     spicy(){
//         console.log("hey your spicy level is : ",this.spicy);
//     }
// }

// class ChildPizza extends Pizza{
//     constructor(typeOfPizza,size,spicy){
//         super(typeOfPizza,size,spicy);
//     }
//     displayDetails(){
//         super.pizzaType();
//         super.size();
//         super.spicy();
//         console.log("hey i am from child class accessing data from Parent class which is passed from child class",this.typeOfPizza,this.size,this.spicy);
//     }
// }

// let pizza1 = new ChildPizza("Pine Apple","Large","Dead Spicy");
// pizza1.displayDetails();

// single inheritance example 4--

// class Watch{
//     constructor(brand,series){
//         this.brand = brand;
//         this.series = series;
//     }
//     brand(){
//         console.log("hey your wathch brand is ",this.brand);
//     }
//     series(){
//         console.log("hey your watch model is ",this.series);
//     }

// }

// class SmartWatch extends Watch{
//     constructor(brand,series){
//         super(brand,series);
//         super.brand();
//         super.series();
//     }
// }

// let watch1 = new SmartWatch("Apple","Apple watch Ultra 4");

// using another way for example 4

// class Watch{
//     constructor(brand,series){
//         this.brand = brand;
//         this.series = series;
//     }
//     showBrand(){
//         console.log("hey your wathch brand is ",this.brand);
//     }
//     showSeries(){
//         console.log("hey your watch model is ",this.series);
//     }

// }

// class SmartWatch extends Watch{
//     constructor(brand,series){
//         super(brand,series);
//         this.showBrand();
//         this.showSeries();
//     }
//     method(){
//         this.showBrand();
//     }
// }

// let watch1 = new SmartWatch("Apple","Apple watch Ultra 4");
// watch1.method();


class Watch{
    constructor(){
        
    }
    showBrand(){
        console.log("hey your wathch brand is ",this.brand);
    }
    showSeries(){
        console.log("hey your watch model is ",this.series);
        // console.log("my name is",fname); // this will not work
    }

}

class SmartWatch extends Watch{
    constructor(brand,series){
        super();
        this.brand = brand;
        this.series = series;
        this.fname = "mani";
        this.showBrand();
        this.showSeries();
    }
    method(){
        this.showBrand();
    }
}

let watch1 = new SmartWatch("Apple","Apple watch Ultra 4");
watch1.method();