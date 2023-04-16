function reverse(arr) {
    var temp =0;
    var reverse_count= arr.length - 1;
    for(i = 0; i < reverse_count; i++){
        temp = arr[i];
        arr[i] = arr[reverse_count];
        arr[reverse_count] = temp
        reverse_count--;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
