// Hi, this is my first attempt to fully code purely in JS
// Praditya (dewantara@live.com)

//// Digit sum function using while

function digitSum(digits){
    sum=0;
    while (digits>0){
        sum+=digits%10;
        digits=Math.floor(digits/10);
    }
    console.log(sum);
}

digitSum(2016);

// Factorial function using 'for' statement

function calculateFactorialAlternate(number){
    if (number<0){
        console.log("undefined");
    }
    else{
        let result=1;
        result=result*i;
            for(i=1;i<=number;i++){
        }
        console.log(result);
    }
}

calculateFactorialAlternate(-1);

// Writing pyramid of stars using concatNCopies function

function concatNCopies(n,str) {
    let result="";
    for(let i=0;i<n;i++){
        result += str;
    }
    return(result);
}

const N_LEVELS = 10;
let a = N_LEVELS

for (let row=1;row<=N_LEVELS;row++){
    let star_amount = row*2-1;
    let star = concatNCopies (star_amount,"*");
    a--;
    console.log(" ".repeat(a)+star);
}

//  Ruth-Aaron Pairs(RAP) : Pairs of number which have equal distinct prime number factors
 

const NUM_PAIRS=15; /* Only producing 15 RAP */

function printRAP(){
    let n = 1, RAPFound = 0;
    while (RAPFound<NUM_PAIRS){
        if (isRAP(n)){
            RAPFound++
            console.log(RAPFound+". "+n+", "+(n+1));
        }
        n++        
    }
}

function isRAP(n){
    let firstNum = n, secondNum = n+1;
    return sumOfDistinctPrimeFactor(firstNum) === sumOfDistinctPrimeFactor(secondNum);
}

// This super clever algorithm is taken from CS106 class material at Stanford 
function sumOfDistinctPrimeFactor(n){
    let sumODP = 0, factor = 2; /* 1 is not a prime number */
    while (n>1){
        if (n % factor === 0){
            sumODP += factor;
            while(n % factor === 0){
                n /= factor; /* This to makes the loop stop if n is <= 1 */
            }
        }
        factor++;
    }
    return sumODP;
}

printRAP();


