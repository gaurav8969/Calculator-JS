let currentInput = "";
let product = "";
let operator = "";
let firstOperator = true;

function press(btn){
    btn.classList.remove("released");
    btn.classList.add("pressed");
}

function release(btn){
    btn.classList.remove("pressed");
    btn.classList.add("released");
}

function calculate(operator){
    switch(operator){
        case "+":{
            product = Number(product) + Number(currentInput);
            break;
        }case "-":{
            product = Number(product) - Number(currentInput);
            break;
        }case "*":{
            product = Number(product) * Number(currentInput);
            break;
        }case "/":{
            product = Number(product) / Number(currentInput);
            break;
        }
    }
    currentInput = product;
    let display = document.getElementById("displayText");
    display.innerText = product;
}

function input(btn){
    let id = btn.id;
    let display = document.getElementById("displayText");
    switch(id){
        case '1':{
            if(currentInput == ""){
                display.innerText = "1";      
            }else{
                display.innerText += "1";
            }
            currentInput += "1";
            break;
        }case '2':{
            if(currentInput == ""){
                display.innerText = "2";
            }else{
                display.innerText += "2";
            }
            currentInput += "2";
            break;
        }case '3':{
            if(currentInput == ""){
                display.innerText = "3";
            }else{
                display.innerText += "3";
            }
            currentInput += "3";
            break;
        }case '-':{
            if(currentInput == "")break;

            if(firstOperator){
                display.innerText = "-";
            }else{
                calculate(operator);
            }
            firstOperator = false;
            product = currentInput;
            currentInput = "";
            operator = "-";
            break;
        }case '4':{
            if(currentInput == ""){
                display.innerText = "4";
                
            }else{
                display.innerText += "4";
            }
            currentInput += "4";
            break;
        }case '5':{
            if(currentInput == ""){
                display.innerText = "5";
                
            }else{
                display.innerText += "5";
            }
            currentInput += "5";
            break;
        }case '6':{
            if(currentInput == ""){
                display.innerText = "6";
                
            }else{
                display.innerText += "6";
            }
            currentInput += "6";
            break;
        }case '*':{
            if(currentInput == "")break;

            if(firstOperator){
                display.innerText = "*";
            }else{
                calculate(operator);
            }
            firstOperator = false;
            product = currentInput;
            currentInput = "";
            operator = "*";
            break;
        }case '7':{
            if(currentInput == ""){
                display.innerText = "7";
            }else{
                display.innerText += "7";
            }
            currentInput += "7";
            break;
        }case '8':{
            if(currentInput == ""){
                display.innerText = "8";
                
            }else{
                display.innerText += "8";
            }
            currentInput += "8";
            break;
        }case '9':{
            if(currentInput == ""){
                display.innerText = "9";
                
            }else{
                display.innerText += "9";
            }
            currentInput += "9";
            break;
        }case '/':{
            if(currentInput == "")break;

            if(firstOperator){
                display.innerText = "/";
            }else{
                calculate(operator);
            }
            firstOperator = false;
            product = currentInput;
            currentInput = "";
            operator = "/";
            break;
        }
        case '0':{
            if(currentInput == ""){
                display.innerText = "0";                
            }else{
                display.innerText += "0";
            }
            currentInput += "0";
            break;
        }case '.':{
            display.innerText += ".";
            currentInput += ".";
            break;
        }case 'equals':{
            if(currentInput != ""){
                calculate(operator);
                firstOperator = true;
            }
            break;
        }case 'clear':{
            display.innerText = "";
            operator = "";
            firstOperator = true;
            product = "";
            currentInput = "";
            break;
        }case '+':{
            if(currentInput == "")break;

            if(firstOperator){
                display.innerText = "+";
            }else{
                calculate(operator);
            }
            firstOperator = false;
            product = currentInput;
            currentInput = "";
            operator = "+";
            break;
        }
    }
}

let btns = document.querySelectorAll(".btns");

for(let btn of document.querySelectorAll(".btns")){
    btn.addEventListener("mousedown",()=>{
        press(btn);
    });
    btn.addEventListener("mouseup",()=>{
        release(btn);
        input(btn);
    });
    btn.addEventListener("mouseleave", ()=>{
        release(btn);
    })
}