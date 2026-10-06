// class A { //GrandParent or super super class
//     m1(){
//         console.log("i am m1() from A")
//     }
// }
// class B extends A { // parent or super class
//     m2(){
//         console.log("i am m1() from B")
//     }
// }
// class C extends B { // child class
//     m3(){
//         console.log("i am m1() from C")
//     }
// }

// let obj = new C();
// obj.m1();
// obj.m2();
// obj.m3();


// class A { //GrandParent or super super class
//     m1(){
//         console.log("i am m1() from A")
//     }
// }
// class B extends A { // parent or super class
//     m2(){
//         console.log("i am m1() from B")
//     }
// }
// class C extends B { // child class
//     m3(){
//         console.log("i am m1() from C")
//     }
// }

// let obj = new C();
// obj.m1();
// obj.m2();
// obj.m3();

// let obj0 = new B();
// obj0.m1();
// obj0.m2();
// obj0.m3(); // ❌

// let obj1 = new B();
// obj1.m1(); 
// obj1.m2(); // ❌
// obj1.m3(); // ❌


// multilevel inheritance with "constructors"....
class BankAccount{
    constructor(fname,accNumber){
        this.fname = fname;
        this.accNumber = accNumber;
    }
    displayBankAccount(){
        console.log("Bank Account details",this.fname);
        console.log("Bank Account details",this.accNumber);
    }
}

class BankBalance extends BankAccount{
    constructor(fname,accNumber,bal){
        super(fname,accNumber);
        this.bal = bal;
    }
    displayBankBalance(){
        super.displayBankAccount();
        console.log("BAnk balance",this.bal);
    }
}
class AccountType extends BankBalance{
    constructor(fname,accNumber,bal,accType){
        super(fname,accNumber,bal);
        this.accType = accType;
    }
    displayAccountType(){
        super.displayBankBalance();
        console.log("Account Type",this.accType);
    }
}

let obj = new AccountType("mani",101,12000,"savings");
obj.displayAccountType();