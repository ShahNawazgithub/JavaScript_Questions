var num =parseInt(prompt(`Enter the Number`))
var sum =0
var  new_num=num

while(num!=0){
    let rem=num%10
    sum=sum+Math.pow(rem,3)
    num =parseInt(num/10)
}
if(sum==new_num){
    document.write(`${new_num} is Armstrong Number`)
}
else{
    document.write(`${new_num} is not Armstrong Number`)

}