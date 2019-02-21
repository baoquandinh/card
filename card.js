class Deck {
    constructor() {
        // Creates the deck and store the cards into an array
        this.cards = []
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
        this.suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
        this.build()
    }

    print() {
        this.cards.forEach(card => {
            console.log(`${card.rank} of ${card.suit}`)
        })
    }

    build() {
        this.ranks.forEach(rank => {
            this.suits.forEach(suit => {
                this.cards.push(new Card(rank, suit))
            })
        })
    }

    specialShuffle() {
        let size = this.cards.length,
            index, temp

        // While there remains element to shuffle
        while (size) {
            // Pick a random element to be swapped out with the last element
            index = Math.floor(Math.random() * size--)
            temp = this.cards[size]
            this.cards[size] = this.cards[index]
            this.cards[index] = temp
        }
        return this.cards
    }

    shuffle() {
        // Randomizes which part of the deck to shuffle
        let shuffleSize = this.cards.length
        let tempDeck = Math.floor(Math.random() * shuffleSize)
        console.log(shufflePoint)
        this.cards.splice(shufflePoint, )
    }

    overhandShuffle(repeat) {
        let tempDeck = this.cards.splice(this.cards.length / 2)
        let secondSplit = tempDeck.splice(tempDeck.length / 2)

        while (repeat) {
            //Add it back
            secondSplit.forEach(card => {
                this.cards.unshift(card)
            })
            tempDeck.forEach(card => {
                this.cards.push(card)
            })
            tempDeck = this.cards.splice(this.cards.length / 2)
            secondSplit = tempDeck.splice(tempDeck.length / 2)
            repeat--;
        }
    }

    deal() {

    }
}

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    outputCard() {
        console.log(`${this.rank} of ${this.suit}`)
    }

}


deck = new Deck();
// deck.shuffle(); 
deck.overhandShuffle(2);
deck.print();