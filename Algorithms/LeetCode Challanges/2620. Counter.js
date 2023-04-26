var counterLap=0;

/*function createCounter(n) {
    return function() {
        counterLap = counterLap+ 1;
        return n+counterLap-1;
    }
}*/


var createCounter = function(n) {
    return function() {
        counterLap = counterLap+ 1;
        return n+counterLap-1;
    };
};

const counter = createCounter(5)
var test = [counter(),counter(),counter(),counter(),counter(),counter(),counter()];
console.log(test);


