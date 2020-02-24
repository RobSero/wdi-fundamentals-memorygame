
let cards = ['king', 'king', 'queen', 'queen'];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);



let cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log('User flipped ' + cardOne);
console.log('User flipped ' + cardTwo);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert('matched congratulations!')
    }
    else {
        alert('Unlucky but nope!')
    }
}