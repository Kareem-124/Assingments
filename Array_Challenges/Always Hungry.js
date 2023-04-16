function alwaysHungry(arr) {
    var food_check = false;

    for(var i =0; i<arr.length; i+=1){
    if(arr[i] == "food"){
        console.log("yummy");
        food_check = true;
    }
}
if(food_check == false)console.log("I'm hungry");
}
//alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
