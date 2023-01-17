var num =parseInt(prompt(`Enter the Number`))
var count=0
for(let i=1;i<=num/2;i++){
    if(num%i==0){
        count++
        document.write(`Factors of Number ${num} = ${i} <br>`);
    }
}
document.write(`Total factors of ${num} = ${count}`);



// var num =9
// var count=0
// for(let i=1;i<=num/2;i++){
//     if(num%i==0){
//         count++
//         console.log(`Factors of Number ${num} = ${i} `);
//     }
// }
// console.log(`Total factors of ${num} = ${count}`);