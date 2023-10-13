//document.getElementById("count-el").innerText=5
// let count=0
// count=count+1
// console.log(count) 
let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
let count=0
console.log(countEl)
function increment(){
    count++;
    countEl.innerText= count;
}
function reset()
{
    count=0;
    countEl.innerText= count;
}
function save()
{
    let countStr= " - "+ count
    saveEl.innerText+=countStr
    console.log(count) 
}