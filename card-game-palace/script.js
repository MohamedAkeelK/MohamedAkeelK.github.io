// CARD GAME IDEA PALACE

// 52 cards in deck
// each player has 3 random cards placed down
// and 3 random cards placed on top of those faced down cards
// each player starts with 3 cards in their hand

// 52 - 12 = 40 cards left in deck

// goal of the game is the get rid of all cards in players hand and field
// suit does not matter in this game, only the number

// player 1 places their choice of card on field
// next player must place a card higher than the one on the field, if not able to play a higher card,
//  then player must add the cards in the field to their hand.

// special cards are
// 2: can play a 2 no matter what and grant another turn to play any other card
// 10: can get rid of all the cards on the play field, also grants another turn to play any card

// when player is out of cards, they are able to play the faced up cards on their field,
// when those faced up cards are all played, player can play the faced down cards.

// once player is out of cards they win.

// fetch()
//   .then(console.log)
//   .catch((err) => console.log(err));

// SHUFFLE
// https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 copy
// Add deck_count as a GET or POST parameter to define the number of
// Decks you want to use. Blackjack typically uses 6 decks. The default is 1.

// Draw a Card:
// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2 copy
// The count variable defines how many cards to draw from the deck. Be sure to
//  replace deck_id with a valid deck_id. We use the deck_id as an identifier
//  so we know who is playing with what deck. After two weeks, if no actions have
//  been made on the deck then we throw it away.

// TIP: replace <<deck_id>> with "new" to create a shuffled deck and draw cards from that deck in the same request.

// A Brand New Deck:
// https://deckofcardsapi.com/api/deck/new/ copy
// Open a brand new deck of cards.
// A-spades, 2-spades, 3-spades... followed by diamonds, clubs, then hearts.

// Hot Tip: Add jokers_enabled=true as a GET or POST parameter to your request
// to include two Jokers in the deck.

// Adding to Piles
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S copy
// Piles can be used for discarding, players hands, or whatever else. Piles are created on the fly, just give a pile a name and add a drawn card to the pile. If the pile didn't exist before, it does now. After a card has been drawn from the deck it can be moved from pile to pile.

// Note: This will not work with multiple decks.

// Listing Cards in Piles
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/list/ copy
// Note: This will not work with multiple decks.

// Drawing from Piles
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?cards=AS copy
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?count=2
// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/bottom/
// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/random/
// Specify the cards that you want to draw from the pile. The default
// is to just draw off the top of the pile (it's a stack). Add /bottom/ to the URL
//  to draw from the bottom or /random/ to draw random cards - both of these also
//  accept the count parameter.
// let deck_id = "kohxg1tespsg";

// async function getDeckId(deck) {
//   let myDeck = await fetch(deck);
//   let data = await myDeck.json();
//   // console.log(data.deck_id);
//   return data.deck_id;
// }

// console.log(
//   getDeckId(
//     "https://deckofcardsapi.com/api/deck/kohxg1tespsg/shuffle/?deck_count=1"
//   ).
// );

// async function drawCard(deck) {
//   let myDeck = await fetch(deck);
//   let data = await myDeck.json();
//   console.log(data);

// console.log(data.cards[0].image);

// document.querySelector(".card1").src = data.cards[0].image;
// document.querySelector(".card2").src = data.cards[0].image;
// document.querySelector(".card3").src = data.cards[0].image;
// }

// getDeckId(
//   "https://deckofcardsapi.com/api/deck/kohxg1tespsg/shuffle/?deck_count=1"
// );

// drawCard("https://deckofcardsapi.com/api/deck/kohxg1tespsg/draw/?count=1");
// drawCard("https://deckofcardsapi.com/api/deck/kohxg1tespsg/draw/?count=1");

// class Deck {
//   constructor(id) {
//     this.id = id;
//   }
// }

// class Player {
//   constructor(name, startCards) {
//     this.name = name;
//     this.startCards = startCards;
//   }
// }

// let deck1 = new Deck(
//   getDeckId(
//     "https://deckofcardsapi.com/api/deck/kohxg1tespsg/shuffle/?deck_count=1"
//   )
// );
//

let deck = {
  deckId: "kohxg1tespsg",
  fetchDeck: function () {
    fetch(
      "https://deckofcardsapi.com/api/deck/kohxg1tespsg/shuffle/?deck_count=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const { deck_id, remaining, shuffled } = data;
        console.log(deck_id, remaining, shuffled);
      });
  },
  drawCard: function (clas) {
    fetch("https://deckofcardsapi.com/api/deck/kohxg1tespsg/draw/?count=1")
      .then((response) => response.json())
      .then((data) => {
        return this.displayCard(data, clas);
        // console.log(data);
        // const { cards, deck_id, remaining } = data;
        // console.log(cards[0].image, deck_id, remaining);
      });
  },
  displayCard: function (data, clas) {
    const { cards, deck_id, remaining } = data;
    document.querySelector(clas).src = cards[0].image;
    console.log(cards[0].image, deck_id, remaining);
  },
  addToPile: function (player) {
    fetch(
      "https://deckofcardsapi.com/api/deck/kohxg1tespsg/pile/" +
        player +
        "/add/?cards=AS,2Q"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { deck_id, piles, remaining } = data;
        console.log(deck_id, piles.player1.remaining, remaining);
      });
  },
  listCards: function (player) {
    fetch(
      "https://deckofcardsapi.com/api/deck/kohxg1tespsg/pile/" +
        player +
        "/list/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // const { deck_id, piles, remaining } = data;
        // console.log(deck_id, piles.discardPile.remaining, remaining);
      });
  },
};

// let hand1 = () => {
//   deck.drawCard(".card1");
//   deck.drawCard(".card2");
//   deck.drawCard(".card3");
// };

// let hand2 = () => {
//   deck.drawCard(".carda");
//   deck.drawCard(".cardb");
//   deck.drawCard(".cardc");
// };

// deck. addToPile();

// this.displayDeck(data));

// },
// displayDeck: function (data) {
// console.log(data.remaining);
// const { deck_id, remaining, shuffled } = data;
// console.log(deck_id, remaining, shuffled);
// const { icon, description } = data.weather[0];
// const { temp, humidity } = data.main;
// const { speed } = data.wind;
// console.log(name, icon, description, temp, humidity, speed);
// document.querySelector(".city").innerText = `Weather in ${name}`;
// document.querySelector(".icon").src =
//   "https://openweathermap.org/img/wn/" + icon + ".png";
// document.querySelector(".description").innerText = description;
// document.querySelector(".temp").innerText = temp + "°C";
// document.querySelector(".humidity").innerText =
//   "Humidity: " + humidity + "%";
// document.querySelector(".wind").innerText =
//   "Wind speed: " + speed + " km/h";
// document.querySelector(".weather").classList.remove("loading");
// },
// drawCard: function (id, count) {
//   fetch("https://deckofcardsapi.com/api/deck/kohxg1tespsg/draw/?count=1")
//     .then((response) => response.json())
//     .then((data) => this.displayDeck(data));
// },
// search: function () {
//   this.fetchWeather(document.querySelector(".search-bar").value);
// },
// };
