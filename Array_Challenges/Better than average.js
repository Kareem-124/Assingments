function betterThanAverage(arr) {
    var average =0;
    var sum = 0;
    for(var i =0; i < arr.length ; i+=1){
        sum = sum + arr[i];
    }
    average = sum / arr.length;
    var count = 0
    for(var i =0; i < arr.length ; i+=1){
        if(arr[i] > average)count++;
    }    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
