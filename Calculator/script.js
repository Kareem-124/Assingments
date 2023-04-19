var displayDiv = document.querySelector("#display");
var displayOp = document.querySelector("#opDisplay");
var firstValue = 0;
var secondValue =0;
var operation = " ";
var equalStatus = true;
var temp = 0;

function press(value){
if(equalStatus){
    displayDiv.innerText = value;
    equalStatus=false;
}
else {
    displayDiv.innerText = displayDiv.innerText + value ;

}
}

function clr(value){
    equalStatus = true;
    
    if(value){
        displayDiv.innerText =0;
        restValues();
    }



}

function setOP(operand){
    switch(operand){
        case '+':
        firstValue = displayDiv.innerText;
        operation = operand;
        displayOp.innerText = operand;
        clr();
        break;

        
        case '-':
        firstValue = displayDiv.innerText;
        operation = operand;
        displayOp.innerText = operand;
        clr();
        break;

        
        case '*':
        firstValue = displayDiv.innerText;
        operation = operand;
        displayOp.innerText = 'x';
        clr();
        break;

        
        case '/':
        firstValue = displayDiv.innerText;
        operation = operand;
        displayOp.innerText = '÷';
        clr();
        break;
    }
}
function restValues(){
    displayOp.innerHTML = " ";
    firstValue =0;
    secondValue=0;
    temp =0;
    operation = " ";
    equalStatus = true;
}
function calculate(){
    switch(operation){
        case '+':
        secondValue= displayDiv.innerText;
        temp = parseFloat(firstValue) + parseFloat(secondValue);
        displayDiv.innerText= temp;
        restValues();
        break;

        
        case '-':
        secondValue= displayDiv.innerText;
        temp = parseFloat(firstValue) - parseFloat(secondValue);
        displayDiv.innerText= temp;
        restValues();
        break;

        
        case '*':
        secondValue= displayDiv.innerText;
        temp = parseFloat(firstValue) * parseFloat(secondValue);
        displayDiv.innerText= temp;
        restValues();
        break;

        
        case '/':
        secondValue= displayDiv.innerText;
        temp = parseFloat(firstValue) / parseFloat(secondValue);
        displayDiv.innerText= temp;
        restValues();
        break;
    }
}