let firstCard= getRandomNumber()
let secondCard= getRandomNumber()
let count=0
let sum= firstCard + secondCard
let cards= [firstCard, secondCard]
let hasBlackJack= false
let isAlive= true
let message= ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
function getRandomNumber(){
    let rn= (Math.floor(Math.random()*13))+1
    if (rn===1){
        return 11
    }
    else if (rn>=11){
        return 10
    }
    else {
        return rn
    }
}
function renderGame(){
    cardEl.textContent= "Cards: "
    for ( let i=0; i< cards.length; i++){
        cardEl.textContent +=cards[i] + ","
        sumEl.textContent = "Sum: " + sum}
    if (sum < 21){
        messageEl.textContent="Do you want to draw a new card?"
    }else if(sum === 21){
        messageEl.textContent="Congratulations! you have got a Black Jack!"
        hasBlackJack= true 
    } else {
        messageEl.textContent="Better luck next time!"
        isAlive= false
    }
    if (hasBlackJack === true){
        messageEl.textContent+=" Cash out!"
    }
}
function startGame(){
    renderGame()
    count++
}

function newCard(){
    if (count>0){
        if (isAlive===true && hasBlackJack===false){
            console.log("Drawing a new card from the deck!")
            let card= getRandomNumber()
            cards.push(card)
            sum += card
            renderGame()
        }
    }
    else{
        messageEl.textContent= "Please draw a Card first"
    }
}


