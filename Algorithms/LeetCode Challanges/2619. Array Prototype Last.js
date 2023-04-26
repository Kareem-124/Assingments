Array.prototype.last = function() {
    if(this.length == 0 ){
        return -1;
    }
    else{
        return this[(this.length-1)];
    }

    
};

let arr=[1,5];
let num=[1,2,3,5,6,4,7,8,9,4,6,5,4,6,5,4,5,6,4,5,6,5,4,6,5,4,5,6,5,4,5,6,5,4,5,6,5,4,6,5,4,5,6,45,4,5,6,22];

console.log(arr.last()); 
console.log(num.last());