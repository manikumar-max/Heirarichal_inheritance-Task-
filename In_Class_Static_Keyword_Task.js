class Task1{
    static sumOfNaturalNumbers(){
        let sum = 0;
        for(let i = 1;i<=5;i++){
            sum+= i
        }
        console.log(`The sum of n natural numbers are ${sum}`);
    };
    static factorialValueOfGivenNumber(num){
        let factorialValue = 1
        for(let i = num;i >= 1; i--){
            factorialValue*=i;
        }
        console.log("your factorial value is",factorialValue)
    };
    static primeNumber(){
        let num = 19;
        let Prime = true;
        for(let i = 2;i <= (num**0.5);i++){
            if(num%i == 0){
                Prime = false;
                break;
            }
        }
        if(Prime){
            return `"your number is a prime number",${num}`
        }else{
            return `"your number is not a prime number",${num}`
        }
    };
    static HCF(a,b){
        let hcf = 1;
        for(let i = Math.min(a,b);i >= 1; i--){
            if(a % i == 0 && b % i == 0){
                hcf = i;
                break;
            }
        };
        return `your HCF of ${a},${b} is ${hcf}`;
    };
    
}

Task1.sumOfNaturalNumbers();
Task1.factorialValueOfGivenNumber(4);
console.log(Task1.primeNumber());
console.log(Task1.HCF(12,16));

class Task2{
    static LCM(){
        let a = 2;
        let b = 3;
        for(let i = Math.max(a,b);i>=1;i++){
            if(i%a == 0 && i%b== 0){
                console.log(`your lcm of ${a},${b} are ${i}`);
                break
            }
        }
    };
    static sumOfDigits(num){
        let sum = 0;
        let i = num;
        while(i>0){
            let digit = i%10;
            sum+=digit
            i = parseInt(i/10);
        }
        console.log(`The sum of digits in your number ${num} is ${sum}`)
    };
    static Palindrome(){
        let num = 1221;
        let rev = 0;
        for(let i = num; i>0;i= parseInt(i/10)){
            let digit = i%10;
            rev = rev*10+digit;
        }
        if(num == rev){
            return `your number ${num} is a palindrome number`;
        }else{
            return `your number ${num} is not a palindrome number`;
        }
    };
    static checkAllDigitsInTheNumberAreSame(num){
        let check = num%10;
        let logic = true;
        for(let i = num;i>0;i = parseInt(i/10)){
            let digit = i%10;
            if(check != digit){
                logic = false;
                break
            }
        }
        if(logic){
            return `In your number ${num} all digits are same.`
        }else{
            return `In your number ${num} all digits are not same.`
        }
    }
}

Task2.LCM();
Task2.sumOfDigits(1234);
console.log(Task2.Palindrome());
console.log(Task2.checkAllDigitsInTheNumberAreSame(1111));