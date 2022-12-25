let firstcard = getRandomCard()
let secondcard = getRandomCard()
let cards = []
let card
var currentTime = new Date();
let sum = 0
console.log(sum)
let hasBlackJack = false
let isAlive = false
let message = ""
// in JavaScript 3 equal marks says 'strictly equal'
let msgEl = document.getElementById("msg-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function start()
{
    isAlive =true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard,secondcard]
    sum = firstcard+ secondcard
    renderGame()
}
function renderGame()
{
    
    if(sum===21)
    {
        console.log("BlackJack! You won:)")
        hasBlackJack = true
    
    }
    
    else if(sum<21)
  message = "Would you like to draw one more card? "
    
    else if (sum>21)
    {
    message = "Oops! Greater than 21. You are out of the game ! :("
    console.log("The sum exceeded 21")
    isAlive = true
    }
    
    if(hasBlackJack===true)
    {
        message = "Can you  believe you just earned a billion dollars !??"
        console.log("Player won the game at: ",currentTime.getHours(),"hours",currentTime.getMinutes(),"minutes",currentTime.getSeconds(),"seconds")
    }
    else if(isAlive ===true)
    {
        message = "Oops! You are out of the game ! :("
    }
    
    msgEl.textContent = message
    cardsEl.textContent = "Cards: " 
    for(let i=0 ; i < cards.length; i++){
        
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    //render out the firstcard and the secondcard
    
}

function newcard() {
    console.log("New card button has been clicked")
    
    let card = getRandomCard()
    sum += card
    renderGame()
    cards.push(card)
    console.log(cards)
    cardsEl.textContent = "Cards: " 
    for(let i=0 ; i < cards.length; i++){
        
        cardsEl.textContent += cards[i] + " "
    }
    
}

function getRandomCard()
{
    let r = Math.floor(Math.random()*13)+1
    if(r>10)
    {
        return 10
    }
    else if(r ===1)
    {
        return 11
    }
    else{
        return r
    }
}
