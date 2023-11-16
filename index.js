let cards=[]
let sum=0
let isAlive = true
let hasBlackjack = false



let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let statusEl = document.getElementById("status-el")

function randomCard() {
    let randomIndex = Math.floor(Math.random()*13) + 1
    if (randomIndex > 10) {
        return 10
    } else if (randomIndex === 1) {
        return 11
    } else {
        return randomIndex
    }

}


function blackjack() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
        cardsEl.textContent = "Cards: "
        for (i = 0; i < cards.length; i = i + 1 ){
        cardsEl.textContent += cards[i] + " "
        
    }
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        statusEl.textContent = "Do you want to draw a new card?"
        
    } else if (sum === 21) {
        statusEl.textContent = "Blackjack"
        hasBlackjack = true
    } else {
        statusEl.textContent = "Game Over"
        isAlive = false
    }
}



function newcard() {
    if (isAlive === true && hasBlackjack === false) {
        let nextCard = randomCard()
        sum += nextCard
        cards.push(nextCard)
        renderGame()
    }
    
}

function newgame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    statusEl.textContent = " "
    isAlive = true
    hasBlackjack = false


}