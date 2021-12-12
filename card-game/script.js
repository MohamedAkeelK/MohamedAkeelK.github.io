// my deck object to keep track of deck
// holds the deck_id, remaing amount, and if shuffled.
let deckInfo = {};

let player1 = {
  cards: [],
};

let player2 = {
  cards: [],
};

// fetch the deck then pass data to pushValsToDeckVals();
let getDeck = function () {
  fetch(
    "https://deckofcardsapi.com/api/deck/kohxg1tespsg/shuffle/?deck_count=1"
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
};

let player1draw = () => {
  fetch("https://deckofcardsapi.com/api/deck/kohxg1tespsg/draw/?count=1")
    .then((response) => response.json())
    .then((drawData) => {
      //   console.log(data);
      const { cards, remaining } = drawData;
      addToPile1("player1", drawData);
      player1.cards.push({
        code: cards[0].code,
        image: cards[0].image,
        value: cards[0].value,
      });
    });
};

let player2draw = () => {
  fetch("https://deckofcardsapi.com/api/deck/kohxg1tespsg/draw/?count=1")
    .then((response) => response.json())
    .then((drawData) => {
      //   console.log(data);
      const { cards, remaining } = drawData;
      addToPile2("player2", drawData);
      player2.cards.push({
        code: cards[0].code,
        image: cards[0].image,
        value: cards[0].value,
      });
    });
};
let addToPile1 = (player, drawData) => {
  //   console.log(drawData.cards[0].code);
  fetch(
    "https://deckofcardsapi.com/api/deck/kohxg1tespsg/pile/" +
      player +
      "/add/?cards=" +
      drawData.cards[0].code
  )
    .then((response) => response.json())
    .then((pileData) => {
      listPile(player);
    });
};

let addToPile2 = (player, data) => {
  console.log(data.cards[0].code);

  fetch(
    "https://deckofcardsapi.com/api/deck/kohxg1tespsg/pile/" +
      player +
      "/add/?cards=" +
      data.cards[0].code
  )
    .then((response) => response.json())
    .then((pileData) => {
      listPile(player);
    });
};

let listPile = (player) => {
  fetch(
    "https://deckofcardsapi.com/api/deck/kohxg1tespsg/pile/" + player + "/list/"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // const { deck_id, piles, remaining } = data;
      // console.log(deck_id, piles.discardPile.remaining, remaining);
    });
};

getDeck();
player1draw();
player1draw();
player1draw();
player2draw();
// addToPile("player1")
