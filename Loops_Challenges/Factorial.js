var product =1;
for ( var i =1; i <= 12; i+=1){
    if(i !=12){
        product = product * i;
        console.log(`${i} *`);
    }
    if(i == 12){
        product = product * i;
        console.log(`${i} = ${product}`);
    }

}