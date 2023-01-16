var num =parseInt(prompt("Enter the Number"))
var sum = 0
while(num !=0){
    let remainder=num%10
    sum=sum+remainder
    num = parseInt (num/10)
}
document.write(`Sum = ${sum}`)