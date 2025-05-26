const hotat = document.getElementById("modu");
//checking 
hotat.style.backgroundColor = "aqua";
//reverse the string
function reverseStr(str){
return str.split("").reverse().join("")
}
// input the string in value
function check(){
    const value = hotat.value;
    const reverse = reverseStr(value);
//check with the given string
    if(reverse === value){
        alert('Palindrome!!!!')
    }
    else{
        alert('NOT a Palindrome!')
    }

    hotat.value ="";
}