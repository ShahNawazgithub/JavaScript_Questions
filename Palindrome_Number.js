var num = parseInt(prompt(`Enter the Number`))
var rev =0
var new_num=num
document.write(`Number is ${num} <br>`)
while (num!=0) {
    let rem=num%10
    rev=rev*10+rem
    num =parseInt(num/10)
}
if(new_num==rev){
    document.write(`${new_num} Number is Palindrome`)
}
else{
    document.write(`${new_num} Number is not Palindrome`)

}
