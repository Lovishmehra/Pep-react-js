// Q1). Write a function calculateDiscount that takes two
// parameters: price and discount (with a default value of 10). The function should
// return the final price after applying the discount

function calculateDiscount(price , discount = 10){
    let real_price = price - (price * (discount/100));
    return real_price;
}
console.log(calculateDiscount(1000));

// Q2)Create a function mergeArrays that takes two arrays as parameters and returns a new
// array that combines both arrays using the spread operator.

function mergeArrays(...a){
    return a;
}
let x1 = [1,2,3];
let x2 = [4,5,6];
console.log(mergeArrays(...x1,...x2));


// Q3)Write a function logArguments that takes any number of arguments and logs them to
// the console. Use rest parameters to collect the arguments

function logArguments(...a){
    for(let i = 0 ; i < a.length ; i++){
        console.log(a[i]);
    }
}
logArguments(1,2,3,4,5,"Hola");


// Q4)Create a function createMessage that takes a default message and an indefinite
// number of names. The function should return an array of personalized messages for
// each name

function createMessage(message="Hello " , ...names){
    for(let i = 0 ; i < names.length ; i++){
        console.log(message + " " + names[i]);
    }
}
createMessage("Welcome" , "Sashank" , "Lpu" , "Hola" , "Winter Pep");


// Q5)Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers.

function sum(num1 , num2 , num3){
    return num1 + num2 + num3;
}
let numbers_array = [1,2,3];
console.log( sum(...numbers_array) ); 


// Q6)Write a function createUserProfile that takes three
// parameters: username, age (defaulting to 25), and country (defaulting to "Unknown").
// Return an object with these properties

function createUserProfile(username , age = 25 , country = "Unknown"){
    return {username , age , country};
}

console.log(createUserProfile("Sashank"));