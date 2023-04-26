/*var number = 0;
var array=[];
var digits=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

for(var i = 0; i< digits.length; i++){
    number=BigInt(BigInt(number) +BigInt((digits[i]*Math.pow(10,(digits.length-i-1)))));
}
console.log(`the converted number = ${BigInt(number)}`);
/*console.log(`the converted number = ${number}`);

number++;
console.log(` number ++ = ${BigInt(number)}`);

while (BigInt(number) > 0){
    var temp = BigInt(number % 10n);
    array.push(Number(temp));
    number=BigInt(number/10n);
    console.log(BigInt(number));
}
array.reverse();
console.log(array);
return array;*/

var digits=[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];

for (var i = digits.length -1; i>=0;i--){
    if(digits[i]==9){
        digits[i]=0;
        if(i == 0){
            digits=[1].concat(digits);
            break
        }
    }
    else{
        digits[i] = digits[i] +1;
        break
    }
}
console.log(digits);
