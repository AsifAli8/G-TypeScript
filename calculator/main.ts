//Calculator in typescript Using Terminal Input

var  prompt = require("prompt-sync")();

let n1 = parseInt(prompt ("enter your firstbb number:"));
let n2 = parseInt(prompt("enter your second number:"));

let operator = (prompt("enter operator(+,-,*,/):"));

if (operator = "+"){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1+n2}`);

}

if (operator = "-"){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1-n2}`);
    
}

if (operator = "*"){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1*n2}`);
    
}

if (operator = "/"){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1/n2}`);
    
}
    
else{
    console.log('pleas select correct operator')
}
export{};
