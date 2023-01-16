var Number = parseInt(prompt("Enter the Number"))
var Sum = 0
for (let i = 1; i <= Number / 2; i++) {
    if (Number % i == 0) {
        Sum += i
    }
}
if (Number == Sum) {
    document.write(`${Number} is Perfect Number`)
}
else {
    document.write(`${Number} is Not Perfect Number`)
}