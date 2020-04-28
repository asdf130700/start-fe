const $inputnum = document.getElementById("num");
const $printbtn = document.getElementById("btn");
const $gugu = document.getElementById("result");

$printbtn.addEventListener('click', evevt =>  printgugu(num.value));

function printgugu(num){
  if(numCheck (num)) {
    let result = "";
    for(let i = 1; i <= 9; i ++){
        result += `${num} * ${i} = ${num * i} <br>`;
    }
    document.getElementById("result").innerHTML = result;
}
else{
    alert("숫자를 입력해주세요");
}
}

function numCheck(num) {
let result = true;
if (num.trim() == "" || isNaN(num)
    || (parseInt(num) < 1 || parseInt(num) > 99999999999)) {
    result = false;
}
    return result;
}
