let calculate_button, middle_cards, player_cards, card_solution

function getNum(cardVal) {
    if (cardVal === undefined) {
        return NaN
    }
    switch (cardVal.trim()) {
        case 'J':
        case 'j':
            return 11
        case 'Q':
        case 'q':
            return 12
        case 'K':
        case 'k':
            return 13
        case 'A':
        case 'a':
            return 1
        default:
            if (Number(cardVal) < 1 || Number(cardVal) > 13) {
                return NaN
            }
            return Number(cardVal)

    }
}

function getCard(cardNum) {
    switch (cardNum) {
        case 1:
            return 'A'
        case 11:
            return 'J'
        case 12:
            return 'Q'
        case 13:
            return 'K'
        default:
            return cardNum
    }
}

function getProduct(middleCardsString) {
    const cards = middleCardsString.split(',')
    return getNum(cards[0]) * getNum(cards[1])
}

function getPlayerCards(playerCardsString) {
    let playerCardsMatrix = []
    for (let player of playerCardsString.split(';')) {
        let currPlayer = player.split(',')
        let currPlayerNums = []
        for (let num of currPlayer) {
            if (isNaN(getNum(num))) {
                return null
            }
            currPlayerNums.push(getNum(num))
        }
        if (currPlayerNums.length != 4) {
            return null
        }
        playerCardsMatrix.push(currPlayerNums)
    }
    return playerCardsMatrix
}

function evaluateCards(cards) {
    let numCards = cards.length
    let result = 0
    for (let i = 0; i < numCards; i++) {
        result += cards[numCards - i - 1] * Math.pow(10, i)
    }
    return result
}

function everyPossiblePermuatation(digits) {
    const results = [];

    function generateHelper(current, remaining) {
        if (current.length > 0) {
            results.push(current.slice());
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextDigit = remaining[i];
            const newCurrent = current.concat(nextDigit);
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            generateHelper(newCurrent, newRemaining);
        }
    }

    generateHelper([], digits);

    return results;
}

function getBestCards(onePlayerCards, product) {
    let bestCards = []
    let bestOffBy = product
    let bestCardValue = -1
    let everyPerm = everyPossiblePermuatation(onePlayerCards)

    for (let cards of everyPerm) {
        let currCardValue = evaluateCards(cards)
        let currOffBy = offBy(currCardValue, product)

        if (bestCardValue == -1 || currOffBy < bestOffBy || (currOffBy == bestOffBy && currCardValue > bestCardValue)) {
            bestOffBy = currOffBy
            bestCardValue = currCardValue
            bestCards = cards
        }
    }

    return bestCards
}

function printCards(cards) {
    let result = ''
    for (let card of cards) {
        result += getCard(card) + ' '
    }
    return result.trim()
}

function offBy(number, product) {
    if (number < product) return product - number
    return Math.min(number % product, Math.abs(product - (number % product)))
}

function calculateGame() {
    calculate_button = document.querySelector(".calculate_button")
    middle_cards = document.querySelector(".middle_cards")
    player_cards = document.querySelector(".player_cards")
    card_solution = document.querySelector(".card_solution")

    let product = getProduct(middle_cards.value)

    if (isNaN(product)) {
        alert("Wrong format")
        return
    }

    let playerCards = getPlayerCards(player_cards.value)

    if (playerCards == null) {
        alert("Wrong format")
    }
    card_solution.innerHTML = ''
    for (let i = 0; i < playerCards.length; i++) {
        let currBestCards = getBestCards(playerCards[i], product)
        let currBestScore = evaluateCards(currBestCards)

        let offByResult = offBy(currBestScore, product)
        let result = "Player " + (i + 1) + "'s best number is " + currBestScore + " (" + printCards(currBestCards) + "), which is " + ((offByResult === 0) ? "" : (offByResult + " away from ")) + "a multiple of " + product
        let textElement = document.createElement('h3')
        textElement.textContent = result
        card_solution.appendChild(textElement)
    }

}