let no1= 8
let no2= 2
document.getElementById("num1-el").textContent= no1
document.getElementById("num2-el").textContent= no2
let sumEl= document.getElementById ("sum-el")
function add(){
    let add= no1+ no2
    sumEl.innerText= "Sum: "+ add
}
function subtract(){
    let subtract=no1-no2
    sumEl.innerText= "difference: "+ subtract
}
function multiply(){
    let multiply= no1*no2
    sumEl.innerText= "multiplication: "+ multiply
}
function divide(){
    let divide=no1/no2
    sumEl.innerText= "Division: "+ divide
}