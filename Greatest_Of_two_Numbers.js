// var num1=parseInt(prompt("Enter first Number "))
// var num2=parseInt(prompt("Enter second Number"))
// document.write(num1>num2?num1:num2);

//-----------------------------------------------------------------------------------------------------
var num1=parseInt(prompt("Enter first Number "))
var num2=parseInt(prompt("Enter second Number"))
if(num1==num2){
    document.write(`Number=${num1} and Number= ${num2} are Equal to each other`)
}
else if(num1>num2){
    document.write(`Number=${num1} is greater than Number=${num2}`)
}
else
document.write(`Number=${num2} is greater than Number=${num1}`)