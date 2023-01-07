var year=parseInt(prompt("Enter the Year"))
if(year%4==0){
    document.write(`${year} is Leap Year`)
}
else if(year%100==0 && year%400==0){   
    document.write(`${year} is Leap Year`)
}
else{
    document.write(`${year} is not Leap Year`)
}