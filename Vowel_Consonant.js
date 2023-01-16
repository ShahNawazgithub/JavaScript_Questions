var char = prompt("Enter the Character")
if (char.length != 1) {
    document.write("Invalid Input")
}
else {
    if (char >= "a" && char <= "z") {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            document.write(`${char} is Lower case Vowel`)
        }
        else{
            document.write(`${char} is Lower case Consonant`)
        }
    }
    else if(char>="A" && char<="Z"){
        if(char=="A"||char=="E"||char=="I"||char=="O"||char=="U"){
            document.write(`${char} is UpperCase case Vowel`)
        }
        else{
            document.write(`${char} is Upper case Consonant`)
        }
    }
    else if(char>="0"&&char<="9"){
        document.write(`${char} is a Digit`)
    }
    else if(char==" ")
    document.write(`${char} is Space`)
    else{
        document.write(`${char} is Special Character`)
    }
}