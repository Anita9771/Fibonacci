// Fibonacci fn
function fibonacciGenerator (n) {
   var arr = [];
    
if (n === 1){
  arr = [0]
} else if (n === 2){
   arr = [0, 1]
} else {
   arr = [0, 1];
//    For loop
    for (var i = 2; i < n; i++){
    var lastElemPos = arr.length - 1;
    var lastElem = arr[lastElemPos];
    var lastElemPos2 = arr.length - 2;
    var lastElem2 = arr[lastElemPos2];
    var elemToPush = lastElem2 + lastElem
   arr.push(elemToPush)
        }
}
 return arr;
}
// Call fn
fibonacciGenerator (25)