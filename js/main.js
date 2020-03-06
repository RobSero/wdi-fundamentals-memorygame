
let cards = [{
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
},
{
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
},
{
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
},
{
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
}
];
let cardsInPlay = [];
let currentScore = 0;
randomArrayIndex = [];

function checkForMatch(){
 
        if (cardsInPlay[0] === cardsInPlay[1]){
            document.querySelector('h1').innerText = 'CONGRATULATIONS!!';
            document.querySelector('header').style.backgroundColor = 'rgb(207, 241, 10)';
            resetButton.removeAttribute('id');
            currentScore = currentScore + 1;
            document.querySelector('#score').innerHTML = currentScore;
        }
        else {
            document.querySelector('h1').innerText = 'GAME OVER!!';
            document.querySelector('header').style.backgroundColor = 'rgb(187, 49, 241)';
            resetButton.removeAttribute('id');
            currentScore = 0;
            document.querySelector('#score').innerHTML = currentScore;
        }
    }
  

  function flipCard(){

    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    console.log(cardId);
    console.log('User flipped over ' + cards[cardId].rank + ' of ' + cards[cardId].suit);
    console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2) {
    checkForMatch();
}
}

function createBoard(){
    randomIndex();
    for(let i = 0; i < cards.length; i++){
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', '/images/back.png');
        cardElement.setAttribute('data-id', randomArrayIndex[i]);
        cardElement.setAttribute('class','card');
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();

let resetButton = document.querySelector('#reset-button');
let instructions = document.querySelector('p');
let howToPlayButton = document.querySelector('#how-to-play');

howToPlayButton.addEventListener('click', function(){
    if(instructions.getAttribute('class') === 'hidden'){
        instructions.removeAttribute('class','hidden')
    }
    else {
        instructions.setAttribute('class','hidden')
    }
});

resetButton.addEventListener('click', resetGame);


function resetGame(){
    resetButton.setAttribute('id','reset-button');
    document.querySelector('h1').innerText = 'Memory Card Game';
    document.querySelector('header').style.backgroundColor = '#F15B31';
    cardsInPlay = [];
    document.getElementById('game-board').innerHTML = '';
    randomArrayIndex = [];
    
    createBoard();
}




function randomIndex(){
  while (randomArrayIndex.length < 4){
      let num = randomNumber();
      if(!randomArrayIndex.includes(num)){
          randomArrayIndex.push(num)
      }
  }
}

function randomNumber(){
    return Math.floor(Math.random()*cards.length);
}
