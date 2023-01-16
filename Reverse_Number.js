var num = parseInt(prompt(`Enter the Number`))
var rev =0
document.write(`Number is ${num} <br>`)
while (num!=0) {
    let rem=num%10
    rev=rev*10+rem
    num =parseInt(num/10)
}
document.write(`Revrse Number is ${rev}`)