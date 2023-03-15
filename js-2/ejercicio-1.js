
function sum(arr) {
    let Resultado = 0;
    for (const num of arr) {
        Resultado += num;
    }
    return Resultado
}


console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0