var start_num=parseInt(prompt("Enter Fisrt the Number"))
var end_num=parseInt(prompt("Enter Last the Number"))
var sum=0
for(let i=start_num;i<=end_num;i++){
sum=sum+i
}
document.write(`Sum first N Numbers ${sum}`)