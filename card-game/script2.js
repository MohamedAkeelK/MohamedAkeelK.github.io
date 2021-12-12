// my deck object to keep track of deck
// holds the deck_id, remaing amount, and if shuffled.
let deckid = "kohxg1tespsg";
let remainingInDeck = 0;

deckInfo = {};

let player1 = {
  cards: [],
};

let player2 = {
  cards: [],
};

// fetch the deck then pass data to pushValsToDeckVals();
let getDeck = function () {
  fetch(
    "https://deckofcardsapi.com/api/deck/" + deckid + "/shuffle/?deck_count=1"
  )
    .then((response) => response.json())
    .then((data) => {
      pushValsToDeckInfo(data);
    });
};

let pushValsToDeckInfo = (data) => {
  // destructure data
  const { deck_id, remaining } = data;
  // add to deckInfo
  deckInfo.deck_id = deck_id;
  deckInfo.remaining = remaining;
  remainingInDeck = remaining;
};

let player1draw = () => {
  fetch("https://deckofcardsapi.com/api/deck/" + deckid + "/draw/?count=1")
    .then((response) => response.json())
    .then((drawData) => {
      //   console.log(data);
      const { cards } = drawData;
      player1.cards.push({
        code: cards[0].code,
        image: cards[0].image,
        value: cards[0].value,
      });
      remainingInDeck--;
    });
};

let player2draw = () => {
  fetch("https://deckofcardsapi.com/api/deck/" + deckid + "/draw/?count=1")
    .then((response) => response.json())
    .then((drawData) => {
      //   console.log(data);
      const { cards, remaining } = drawData;
      player2.cards.push({
        code: cards[0].code,
        image: cards[0].image,
        value: cards[0].value,
      });
      remainingInDeck--;
    });
};

getDeck();
player1draw();
player1draw();
player1draw();
player2draw();

// let card1 = document.createElement("img").classList.add("card1").src;
// document.querySelector(".card1").src = player1.cards[1];
// console.log(player1);
// for (let x of player1.cards) {
//   console.log(x);
// }
// console.log(player1.cards[0].image);
// let link = player1.cards[0].image;
// console.log(link);
// card1.src = player1.cards[1];

let myobj = {
  man: [
    { color: "brown", ass: "hairy" },
    { hair: "black", ass: "hairy" },
    { teeth: "yellow", ass: "hairy" },
  ],
};

console.log(myobj.man[0].ass);
