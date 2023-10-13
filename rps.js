let decisionEL= document.getElementById("decision-el")
let resultEl= document.getElementById("result-el")
let options=["ROCK", "PAPER", "SCISSOR"]
function getRandomIndex()
{
    let rr= Math.floor(Math.random()*3)
    return rr
}
function rock()
{
    let r= getRandomIndex()
    if (r===0){
            decisionEL.textContent= "COMPUTER CHOSE: ROCK"
            resultEl.textContent = "YOU TIED WITH THE COMPUTER"
    }else if (r===1){
        decisionEL.textContent= "COMPUTER CHOSE: PAPER"
        resultEl.textContent = "YOU LOST"
    }
    else{
        decisionEL.textContent= "COMPUTER CHOSE: SCISSOR"
        resultEl.textContent = "YOU WIN!"
    }
}
function paper()
{
    let r= getRandomIndex()
    if (r===0){
            decisionEL.textContent= "COMPUTER CHOSE: ROCK"
            resultEl.textContent = "YOU WIN!"
    }else if (r===1){
        decisionEL.textContent= "COMPUTER CHOSE: PAPER"
        resultEl.textContent = "YOU TIED WITH THE COMPUTER"
    }
    else{
        decisionEL.textContent= "COMPUTER CHOSE: SCISSOR"
        resultEl.textContent = "YOU LOST"
    }
}
function scissor()
{
    let r= getRandomIndex()
    if (r===0){
            decisionEL.textContent= "COMPUTER CHOSE: ROCK"
            resultEl.textContent = "YOU LOST"
    }else if (r===1){
        decisionEL.textContent= "COMPUTER CHOSE: PAPER"
        resultEl.textContent = "YOU WIN!"
    }
    else{
        decisionEL.textContent= "COMPUTER CHOSE: SCISSOR"
        resultEl.textContent = "YOU TIED WITH THE COMPUTER"
    }
}