var start=parseInt(prompt(`Enter the start Number`))
var end=parseInt(prompt(`Enter the end Number`))
var count=0

for(let i=start;i<=end;i++){
    let sum=0
    let num=i
    while(num!=0){
        let rem=num%10
        sum=sum+Math.pow(rem,3)
        num=parseInt(num/10)
    }
    if(i==sum){
        count++
        document.write(`${i} Number is Armstrong <br>`)
    }
}
document.write(`Total Armstrong Number is ${count}`)


