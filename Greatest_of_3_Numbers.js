var num1=parseInt(prompt("Enter the First Number"))
var num2=parseInt(prompt("Enter the Second Number"))
var num3=parseInt(prompt("Enter the Third Number"))
var greatest
if(num1>num2&&num1>num3){
    greatest=num1
}
else if(num2>num1&&num2>num3){
    greatest=num2
}
else
greatest=num3
document.write(`Greatest Number is ${greatest}`)

