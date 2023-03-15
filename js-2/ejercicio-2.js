
function max(arr) {
    let x = arr[0];
    arr.forEach(element => {
    if(element>x) {
    x = element;
    }
    });
    return x;
    }

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined