//const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

function intializeDeck(){
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    deck = [];
    for (let suit of suits){
        for (let value of values.split(',')){
            deck.push({
                suit,value
            })
        }
    }
    return deck
}

const drawnCard = [];
function drawCard(deck, drawnCard){
    const card = deck.pop();
    drawnCard.push(card);
    return card;
}

function multipleCards(numCards, deck, drawnCard){
    const cards = [];
    for (i = 0 ; i < numCards; i++){
        cards.push(drawCard(deck, drawnCard))
    }
    return cards
}

function shuffle(deck) {
    // loop over array backwards -  Fisher-Yates Shuffle Algorithm
    for (let i = deck.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

// **********************************
// USING AN OBJECT + METHODS INSTEAD:
// **********************************

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
      const {
        suits,
        values,
        deck
      } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value,
            suit
          })
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const {
        deck
      } = this;
      // loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  }

// THIS FUNCTION RETURNS A NEW DECK EVERYTIME WE CALL IT!
const makeDeck = () => {
    return {
      deck: [],
      drawnCards: [],
      suits: ['hearts', 'diamonds', 'spades', 'clubs'],
      values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
      initializeDeck() {
        const {
          suits,
          values,
          deck
        } = this;
        for (let value of values.split(',')) {
          for (let suit of suits) {
            deck.push({
              value,
              suit
            })
          }
        }
        // return deck;
      },
      drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
      },
      drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
          cards.push(this.drawCard());
        }
        return cards;
      },
      shuffle() {
        const {
          deck
        } = this;
        // loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
          //pick random index before current element
          let j = Math.floor(Math.random() * (i + 1));
          //swap
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
      }
    }
  }
  
  // OUR FIRST DECK!
  const myDeck = makeDeck();
  myDeck.initializeDeck();
  myDeck.shuffle();
  const h1 = myDeck.drawMultiple(2);
  const h2 = myDeck.drawMultiple(2);
  const h3 = myDeck.drawMultiple(5);
  
  // OUR SECOND DECK!
  const deck2 = makeDeck();
  deck2.initializeDeck()