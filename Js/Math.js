function bob() {
console.log("inputX, inputY");
let X = parseInt (inputX.value);
let Y = parseInt (inputY.value);
console.log(X, Y);
return[X, Y];
}
const inputX = document.getElementById("X");
inputX.addEventListener("input", bob);
const inputY = document.getElementById("Y");
inputY.addEventListener("input", bob);
const button=document.getElementById("verify");
button.addEventListener("click", loh);
const submitButton=document.getElementById("send");
submitButton.addEventListener("click", send);
let result = "не определен";
function loh() {
let a = bob();
if ((a[0] == 0) || (a[1] == 0)) {
result = "учи матчасть";
document.getElementsByName("result")[0].value = "учи матчасть";
}
else {
document.getElementsByName("result")[0].value = 1/(a[0]*a[1]);
}
}
function send() {
let textCondition = document.getElementsByTagName('p')[0].innerText
    document.getElementsByName('formulation')[0].value = textCondition;
    document.getElementsByName('result')[0].value = result;
    document.getElementById("UserEnter").submit();
}
