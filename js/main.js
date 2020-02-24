
let cards = ['king', 'king', 'queen', 'queen'];
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

    console.log('User flipped over ' + cards[cardId]);
cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2) {
    checkForMatch();
}
}

flipCard(2);
flipCard(0);

