var num1=parseInt(prompt("Enter the first Number"))
var num2=parseInt(prompt("Enter the Second Number"))
var num3=parseInt(prompt("Enter the Third Number"))
var num4=parseInt(prompt("Enter the Fourth Number"))
var num5=parseInt(prompt("Enter the Fiveth Number"))
var num6=parseInt(prompt("Enter the Sixth Number"))
let greatest
if(num1>num2&&num1>num3&&num1>num4&&num1>num5&&num1>num6){
    greatest=num1
}
else if(num2>num3&&num2>num4&&num2>num5&&num2>num6){
    greatest=num2
}
else if(num3>num4&&num3>num5&&num3>num6){
    greatest=num3
}
else if(num4>num5&&num4>num6){
    greatest=num4
}
else if(num5>num5){
    greatest=num5
}
else
greatest=num6

document.write(`Greatest Number is ${greatest}`)
