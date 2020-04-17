import FlashcardsBackend from "../backend/Flashcards.backend";

export default class FlashCardsService {

    constructor(userKey) {
        this.flashCardMockBackEnd = new FlashcardsBackend(userKey);
    }

    static formatDecks(results) {
        return Object.keys(results).map((key) => {
            return FlashCardsService.formatDeck(results[key], key)
        });
    }

    static formatDeck(deck, id) {
        return {...deck, id, counts: deck.questions.length}
    }


    getDecks() {
        return this.flashCardMockBackEnd.getDecks();
    }

    getDeck(title) {
        return this.flashCardMockBackEnd.getDeck(title);
    }

    saveDeckTitle(title) {
        return this.flashCardMockBackEnd.saveDeckTitle(title);
    }

    removeDeckTitle(title) {
        return this.flashCardMockBackEnd.removeDeckTitle(title);
    }

    addCardToDeck(title, question, answer) {
        return this.flashCardMockBackEnd.addCardToDeck(title, {question, answer});
    }

}
