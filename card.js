class Deck {
    constructor() {
        // Creates the deck and store the cards into an array
        this.cards = []
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
        this.suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
        this.timestamp = new Date()
        this.timestamp = this.timestamp.getHours() + this.timestamp.getMinutes() + this.timestamp.getSeconds() + this.timestamp.getMilliseconds()
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

    shuffle(repeat) {
        // Randomizes which part of the deck to shuffle
        let max = this.cards.length
        let delta = new Date()
        delta = delta.getHours() + delta.getMinutes() + delta.getSeconds() + delta.getMilliseconds() + this.timestamp
        repeat = repeat * delta
        while (repeat) {
            let shufflePoint = Math.floor(Math.random() * max)
            let tempDeck = this.cards.splice(shufflePoint)
            tempDeck.forEach(card => {
                this.cards.unshift(card)
            })
            repeat--;
        }
        console.log(this.cards)
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
deck.shuffle(600);
// deck.overhandShuffle();
// deck.print();