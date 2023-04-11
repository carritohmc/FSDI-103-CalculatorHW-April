let firstNumber;
let secondNumber;
let result; 
let operation=2; //0 off, 1 add, 2 subtract, 3 divide, 4 multiply


function calculation(){
    console.log(`<p>${operation}</p>`);

switch(operation) {
   
    case 1:
    getNumbers();
    sum(firstNumber,secondNumber);
    break;

    case 2:
    getNumbers();
    subtract(firstNumber,secondNumber);
    break;

    case 3:
    getNumbers();
    division(firstNumber,secondNumber);
    break;

    case 4:
    getNumbers();
    multiplication(firstNumber,secondNumber);
    break;
}

}



function sum(a,b){

    result = a + b;
    document.getElementById("results").innerHTML=`
    <p>The result of ${a} + ${b}  =  ${result} </p>
 
    `
}

function subtract(a,b){
 
    result = a - b;
    document.getElementById("results").innerHTML=`
    <p> The Result of ${a} - ${b} = ${result} </p>
    `

}

function division(a,b){
  
    result = a / b;
    document.getElementById("results").innerHTML=`
    <p> The Result of ${a} / ${b} = ${result} </p>
    `

}

function multiplication(a,b){
  
    result = a * b;
    document.getElementById("results").innerHTML=`
    <p> The Result of ${a} * ${b} = ${result} </p>
    `

}

function getNumbers(){
firstNumber = Number(prompt("Please enter the first number"));
secondNumber = Number(prompt("Please enter the second number"));
}


function sumButton(){
    operation=1;
    calculation();
}

function subButton(){
    operation=2;
    calculation();
}

function divButton(){
    operation=3;
    calculation();
}

function multButton(){
    operation=4;
    calculation();
}