var num=parseInt(prompt("Enter the number"))
// true means,hypothetically the entered number is not prime
//if we take false instead of true that means,hypothetically the entered number is prime
var flag=true
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        flag=false
       break
    }
}
if(flag==true&&num>=2){
    document.write(`${num} is Prime Number`)
}
else
document.write(`${num} is not Prime Number`)


    