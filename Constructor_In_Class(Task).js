
class ClothingStore{
    static typeOfStreet = "Clothes Street";
    static shopName = "Raymond Ltd";
    constructor (shirts,pants,suits,Jeans,sweaters){
        this.shirts = shirts;
        this.pants = pants;
        this.suits = suits;
        this.Jeans = Jeans;
        this.sweaters = sweaters;
    }
    displayValues(){
        console.log("===========================");
        console.log(ClothingStore.typeOfStreet);
        console.log("Good Morning sir Welcome to our shop")
        console.log("Our Shop name is : ",ClothingStore.shopName);
        console.log("BILLING TIME");
        console.log("You have chosen",this.shirts,"shirts");
        console.log("You have chosen",this.pants,"pants");
        console.log("You have chosen",this.suits,"suits");
        console.log("You have chosen",this.Jeans,"Jeans");
        console.log("You have chosen",this.sweaters,"sweaters");
        console.log("Have a NICE DAY sir 'Visit Again our shop'")
    }
};

let customer1 = new ClothingStore(4,5,2,4,1);
customer1.displayValues();

let customer2 = new ClothingStore(8,6,3,8,2);
customer2.displayValues();

class SumOfNaturalNumbers{
    static subject = "'printing sum of natural numbers using instance variables in constructor'";
    static title = "'Sum of Five Natural Numbers'";
    constructor(num1,num2,num3,num4,num5){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    };
    displayNumbers(){
        console.log("=========================================")
        console.log(SumOfNaturalNumbers.subject);
        console.log(SumOfNaturalNumbers.title);
        console.log("This is your first Number : ",this.num1);
        console.log("This is your second Number : ",this.num2);
        console.log("This is your third Number : ",this.num3);
        console.log("This is your fourth Number : ",this.num4);
        console.log("This is your fifth Number : ",this.num5);
    };
    sumOfTotalFiveNumbers(){
        return this.num1+this.num2+this.num3+this.num4+this.num5;
    }
};

let sum1 = new SumOfNaturalNumbers(1,2,3,4,5);
sum1.displayNumbers();
console.log(sum1.sumOfTotalFiveNumbers());

let sum2 = new SumOfNaturalNumbers(6,7,8,9,10);
sum2.displayNumbers();
console.log(sum2.sumOfTotalFiveNumbers());

let sum3 = new SumOfNaturalNumbers(11,12,13,14,15);
sum3.displayNumbers();
console.log(sum3.sumOfTotalFiveNumbers());

class Fruits{
    static shop = "FRUITS BAZAAR";
    static shopName = "Sri Hanuman Fruits Shop";
    constructor(fruit1,fruit2,fruit3,fruit4,fruit5){
        this.fruit1 = fruit1;
        this.fruit2 = fruit2;
        this.fruit3 = fruit3;
        this.fruit4 = fruit4;
        this.fruit5 = fruit5;
    }
    displayFruits(){
        console.log("=================================");
        console.log(Fruits.shop);
        console.log(Fruits.shopName);
        console.log("This is your 'first' fruit is : ",this.fruit1);
        console.log("This is your 'second' fruit is : ",this.fruit2);
        console.log("This is your 'third' fruit is : ",this.fruit3);
        console.log("This is your 'fourth' fruit is : ",this.fruit4);
        console.log("This is your 'fifth' fruit is : ",this.fruit5);
    }
}

let customer3 = new Fruits("Apple","Banana","Orange","Grapes","Pomogranate");
customer3.displayFruits();

let customer4 = new Fruits("Guava","Mango","Pine Apple","Dragon Fruit","Jack Fruit");
customer4.displayFruits();
