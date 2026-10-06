class Test{
    static myName = "mani";
    static metehod1(){
        console.log(` I am method1 and my name is ; ${Test.myName}`);
    };
    
}

Test.metehod1();

// using static variables in different classes and globally

class Abc{
    static myName = "mani";
}

class Def{
    static m1(){
        console.log(`method of def `,Abc.myName)
    }
}

Def.m1();
console.log(`here is your name ${Abc.myName}`)