function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    if (n == 0 || n == 1)fibArr=0;
    else for(i = 0; i < (n-2); i++){
    var  sum = 0;
    sum = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
    fibArr.push(sum);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
