const negate = document.getElementById("negate");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const float = document.getElementById("float");

const equal = document.getElementById("equal");
const multi = document.getElementById("multi");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const div = document.getElementById("div");

const display = document.querySelector(".display");
display.textContent = 0;

const numbers = document.querySelectorAll(".num");

let operand1 = 0;
let operand2 = 0;
let result = 0;
let operator = "";
let numPushed = [];

function add(a,b) {
    return a + b;
}

function min(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
    return a * b;
}
const DECIMAL_ROUNDING = 2;

function operate(a,b,op) {
    switch(op){
        case "+" : 
                result = add(a,b);
                break;
        case "-" :
                result = min(a,b);
                console.log(numPushed);
                break;
        case "/" :
                if(b == 0){
                    alert("You can't divide by 0");
                    return;
                }
                result = divide(a,b);
                break;
        case "*" :
                result = multiply(a,b);
                break; 
        default :
                alert("UNKNOWN OPERATOR");
                return;               
    }

    if (!isNaN(result)){
    result =
        Math.floor(result * Math.pow(10, DECIMAL_ROUNDING)) /
        Math.pow(10, DECIMAL_ROUNDING);
    }
    return result;
}

function addToDisplay(value) {
        numPushed.push(value);
        display.textContent = numPushed.join("");
}

numbers.forEach(button => button.addEventListener("click", () => addToDisplay(button.dataset.number)));

function clearBtn() {
    display.textContent = "";
    numPushed = [];
}
clear.addEventListener("click", ()=> clearBtn());

function deleteBtn() {
    numPushed.pop();
    display.textContent = numPushed.join("");
}
del.addEventListener("click", ()=> deleteBtn());

float.addEventListener("click", ()=> {
    numPushed.push(".");
    display.textContent = numPushed.join("");
})

function negateDisplay() {
    let c_display = (display.textContent);
    if(isNaN(c_display)) {
        return;
    }

    else if (c_display.includes("-")) {
        let n_value = c_display * -1;
        display.textContent = n_value;
        numPushed = String(n_value).split("");
    }

    else {
        let p_value = c_display * -1;
        display.textContent = p_value;
        numPushed = String(p_value).split("");
    }
}

negate.addEventListener("click", ()=> {
    negateDisplay();
    console.log(numPushed);
})

plus.addEventListener("click", () => {
    operand1 = parseFloat(display.textContent);
    operator = "+";
    clearBtn();
});

minus.addEventListener("click", () => {
    operand1 = parseFloat(display.textContent);
    operator = "-";
    clearBtn();
});

multi.addEventListener("click", () => {
    operand1 = parseFloat(display.textContent);
    operator = "*";
    clearBtn();
});

div.addEventListener("click", () => {
    operand1 = parseFloat(display.textContent);
    operator = "/";
    clearBtn();
});

equal.addEventListener("click", () => {
    operand2 = parseFloat(display.textContent);
    const result = operate(operand1, operand2, operator);
    display.textContent = result;
    operand1 = null;
    operand2 = null;
    operator = null;
    numPushed = [];
});

clear.addEventListener("click", () => {
    clearBtn();
    operand1 = null;
    operand2 = null;
    operator = null;
});
