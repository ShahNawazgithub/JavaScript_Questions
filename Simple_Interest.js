//si=p*r*t/100
//Total Amount=p+si
//EMI=total Amount/(t*12)

var Principal_Amount =parseInt(prompt("Enter Principal Amount"))
var Rate =parseInt(prompt("Enter Rate"))
var Time=parseInt(prompt("Enter Rate in year"))
var Simple_Interest=Principal_Amount*Rate*Time/100
var Total_Amount=Principal_Amount+Simple_Interest
var emi=Total_Amount/(Time*12)
document.write(`Simple Interest = ${Simple_Interest} <br>`)
document.write(`Total Amount = ${Total_Amount}<br>`)
document.write(`EMI = ${emi.toFixed(3)}`)
