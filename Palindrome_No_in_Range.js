var start=parseInt(prompt(`Enter the start Number`))
var end=parseInt(prompt(`Enter the end Number`))
var count=0

for(let i=start;i<=end;i++){
    let rev=0
    let num=i
    while(num!=0){
        let rem=num%10
        rev=rev*10+rem
        num=parseInt(num/10)
    }
    if(i==rev){
        count++
        document.write(`${rev} Number is Palindrome <br>`)
    }
}
document.write(`Total Palindrome Number is ${count}`)




