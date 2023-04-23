var array = [
    [1,2,3],
    [1,6,8],
    [14,13,10,20,30],
]
function isPresent2d(arr2d, value){

for(var i =0; i<arr2d.length;i++){

    for(var j =0; j<arr2d[i].length;j++){
        if(arr2d[i][j] == value){
            console.log(`The Value exists ${true} the i index = ${i} the J index = ${j}`);
            return;
        }
    }


}
console.log(`The value dose not exists`);
}

isPresent2d(array,123);