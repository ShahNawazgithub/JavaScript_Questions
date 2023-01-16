var start = parseInt(prompt("Enter start the Number"))
var end = parseInt(prompt("Enter end the Number"))
var count = 0
for (let num = start; num <= end; num++) {
    var flag = true
    for (let i = 2; i <= num/2 ; i++) {
        if (num % i == 0) {
            flag = false
            break
        }
    }
    if (flag == true && num >= 2) {
        document.write(`${num} is Prime Number <br>`)
        count++
    }
}
document.write(`Total Prime Numbers in Range = ${count}`)
    