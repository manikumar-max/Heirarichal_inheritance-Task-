class Parent{
    m1(){
        console.log("I am from Parent m1()");
    }
}

class Child1 extends Parent{
    m2(){
        console.log("I am from Child1 m2()")
    }
}
let child1 = new Child1();
child1.m1();
child1.m2();

class Child2 extends Parent{
    m3(){
        console.log("I am from Child2 m3()")
    }
}
let child2 = new Child2();
child2.m1();
child2.m3();
