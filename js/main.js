
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

function checkForMatch(){
 
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert('matched congratulations!')
        }
        else {
            alert('Unlucky but nope!')
        }
    }
  

function flipCard(cardId){

    console.log('User flipped over ' + cards[cardId].rank + ' of ' + cards[cardId].suit);
    console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);


if (cardsInPlay.length === 2) {
    checkForMatch();
}
}

flipCard(2);
flipCard(0);

