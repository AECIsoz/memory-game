// byta bakgrund och spara i local storage. Jag klurade på hur jag skulle kunna få in detta i en enda funktion istället för tre men tiden räckte inte till. Använde instruktionerna från kursmaterialet https://webbkurs.ei.hv.se/~pb/exempel/GJP/localstorage/
function chooseWhite() {
    localStorage.setItem('storedValue', document.body.style.backgroundImage = "url('images/tapet.png')")
}
function choosePink() {
    localStorage.setItem('storedValue', document.body.style.backgroundImage = "url('images/tapetRosa.png')")
}
function chooseYellow() {
    localStorage.setItem('storedValue', document.body.style.backgroundImage = "url('images/tapetGul.png')")
}

if (localStorage.storedValue) {
    document.getElementById('tapet-vit').value = localStorage.storedValue;
    document.body.style.backgroundImage = localStorage.storedValue
}

function clearAll() {
    document.body.style.backgroundImage = 'none';
    localStorage.clear();
}
// starta om spelet

function restart() {
    location.reload();
}   


document.addEventListener('DOMContentLoaded', () => {

// card options

const cardArray = [
    {
        name: 'butterfly',
        img: 'images/butterfly.jpg'
        
    },
    {
        name: 'butterfly',
        img: 'images/butterfly.jpg'
    },
    {
        name: 'cat',
        img: 'images/cat.jpg'
    },
    {
        name: 'cat',
        img: 'images/cat.jpg'
    },
    {
        name: 'dog',
        img: 'images/dog.jpg'
    },
    {
        name: 'dog',
        img: 'images/dog.jpg'
    },
    {
        name: 'flamingo',
        img: 'images/flamingo.jpg'
    },
    {
        name: 'flamingo',
        img: 'images/flamingo.jpg'
    },
    {
        name: 'frog',
        img: 'images/frog.jpg'
    },
    {
        name: 'frog',
        img: 'images/frog.jpg'
    },
    {
        name: 'jellyfish',
        img: 'images/Jellyfish.jpg'
    },
    {
        name: 'jellyfish',
        img: 'images/Jellyfish.jpg'
    },
    {
        name: 'lizard',
        img: 'images/lizard.jpg'
    },
    {
        name: 'lizard',
        img: 'images/lizard.jpg'
    },
    {
        name: 'parrot',
        img: 'images/parrot.jpg'
    },
    {
        name: 'parrot',
        img: 'images/parrot.jpg'
    },
    {
        name: 'pelican',
        img: 'images/pelican.jpg'
    },
    {
        name: 'pelican',
        img: 'images/pelican.jpg'
    },
    {
        name: 'swans',
        img: 'images/swans.jpg'
    },
    {
        name: 'swans',
        img: 'images/swans.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector(".grid")
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
// create the board
function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/logo.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
 
// check for matches
function checkForMatch () {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/logo.jpg')
        cards[optionTwoId].setAttribute('src', 'images/logo.jpg')
    }

    cardsChosen = []
    cardsChosenId = []
}

// flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }

}



createBoard()


})
