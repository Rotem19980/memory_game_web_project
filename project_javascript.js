document.addEventListener('DOMContentLoaded', () => {
  const CardArray = [
    {
        name: "earth",
        img: "images/earth.jpg"
    },
    {
        name: "earth",
        img: "images/earth.jpg"
    },
    {
        name: "jupiter",
        img: "images/jupiter.jpg"
    },
    {
        name: "jupiter",
        img: "images/jupiter.jpg"
    },
    {
        name: "mars",
        img: "images/mars.jpg"
    },
    {
        name: "mars",
        img: "images/mars.jpg"
    },
    {
        name: "milkyway",
        img: "images/milkyway.jpg"
    },
    {
        name: "milkyway",
        img: "images/milkyway.jpg"
    },
    {
        name: "saturn",
        img: "images/saturn.jpg"
    },
    {
        name: "saturn",
        img: "images/saturn.jpg"
    },
    {
        name: "sun",
        img: "images/sun.jpg"
    },
    {
        name: "sun",
        img: "images/sun.jpg"
    }
  ]

  CardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create a game board
  function createBoard() {
    for (let i = 0; i < CardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === CardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(CardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', CardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
