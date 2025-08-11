const input = document.getElementById("inputText")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value;
    const reverse = reverseString(value)
    
    if(value === reverse){
        alert("P L I N D R O M E")

    }else {
        alert("Not P L I N D R O M E")
    }

    input.value = ""
}