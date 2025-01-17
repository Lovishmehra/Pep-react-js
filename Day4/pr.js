// question 1
const ask = (question, yes, no) => {
    if(confirm(question)) { 
        yes();              
    } else {
        no();               
    }
};

ask(
    "Do you agree?",             
    () => {                      
        console.log("You agreed");
    },
    () => {                      
        console.log("You canceled the execution.");
    }
);
//question 2
// [8,6,7,9]


// question 3
const square = (a) =>{
    console.log( a*a);
}
square(4);

// question 4

const arr  =[1,2,3];
const square2 = arr.map(a => a*a);
console.log(square2)

//question 5

const rev = (st)=>{
    console.log(st.split("").reverse().join(""));
}
rev("hello");

//question 6
const chainable = (initialValue) => {
    return {
        value: initialValue,
        add:  (num) =>{
            this.value += num;
            return this; 
        },
        multiply:  (num) =>{
            this.value *= num;
            return this;
        },
        getResult:  () =>{
            return this.value; 
        }
    };
};

const result = chainable(5).add(3).multiply(2).getResult();
console.log(result);
