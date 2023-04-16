var sum =0;
for ( var i =1; i <= 100; i+=1){
    if(i !=100){
        sum = sum + i;
        console.log(`${i} +`);
    }
    if(i == 100){
        sum = sum + i;
        console.log(`${i} = ${sum}`);
    }

}