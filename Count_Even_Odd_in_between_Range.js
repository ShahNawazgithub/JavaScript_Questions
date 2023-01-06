//------------------------ Count Even Odd in Between Range ----------------------------------------------|------------------

var start_Num = parseInt(prompt(" Enter the start Number"))
var end_Num = parseInt(prompt(" Enter the Last Number"))
var count_even=0
var count_odd=0
for (let i = start_Num; i <= end_Num; i++) {
  if (i % 2== 0) {
   count_even++
  }
  else{
    count_odd++
  }
}
document.write(`Number Even Numbers ${count_even}<br>`)
document.write(`Number Odd Numbers ${count_odd}`)