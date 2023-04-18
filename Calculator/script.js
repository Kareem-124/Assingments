var displayDiv = document.querySelector("#display");
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
        operation = '+';
        console.log(`First value = ${firstValue} // Opreation = ${operation}`);
        clr();
        break;

        
        case '-':
        firstValue = displayDiv.innerText;
        operation = '-';
        console.log(`First value = ${firstValue} // Opreation = ${operation}`);
        clr();
        break;

        
        case '*':
        firstValue = displayDiv.innerText;
        operation = '*';
        console.log(`First value = ${firstValue} // Opreation = ${operation}`);
        clr();
        break;

        
        case '/':
        firstValue = displayDiv.innerText;
        operation = '/';
        console.log(`First value = ${firstValue} // Opreation = ${operation}`);
        clr();
        break;
    }
}
function restValues(){
    console.log("Values are rested!");
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
        console.log(`${operation} : ${temp}`);
        console.log(`parseFloat(firstValue) = ${parseFloat(firstValue)}`);

        displayDiv.innerText= temp;
        restValues();
        break;

        
        case '-':
        secondValue= displayDiv.innerText;
        temp = parseFloat(firstValue) - parseFloat(secondValue);
        console.log(`${operation} : ${temp}`);
        displayDiv.innerText= temp;
        restValues();
        break;

        
        case '*':
        secondValue= displayDiv.innerText;
        temp = parseFloat(firstValue) * parseFloat(secondValue);
        console.log(`${operation} : ${temp}`);
        displayDiv.innerText= temp;
        restValues();
        break;

        
        case '/':
        secondValue= displayDiv.innerText;
        temp = parseFloat(firstValue) / parseFloat(secondValue);
        console.log(`${operation} : ${temp}`);
        displayDiv.innerText= temp;
        restValues();
        break;
    }
}