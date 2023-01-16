var Num =prompt("Enter the Range")
var a=0
var b=1
var sum=a+b
document.write(`${a}<br>${b}<br>`) 
while(sum<=Num){
    document.write(`${sum}<br>`)
    a=b
    b=sum
    sum=a+b
}
