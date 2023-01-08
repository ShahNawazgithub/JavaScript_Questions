var start = parseInt(prompt("Enter the Start Number"))
var end = parseInt(prompt("Enter the End Number"))
for (let i = start; i <= end; i++) {
    if (i == 2) {
        document.write(`${i} <br>`)
        continue;
    }
    for (let j = 2; j <= i/2; j++) {
        if (i % j == 0)
            break
        else if (i == j + 1)
            document.write(`${i} <br>`)
    }
}