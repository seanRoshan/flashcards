import FlashcardsBackend from "../backend/Flashcards.backend";

export default class FlashCardsService {

    constructor(userKey) {
        this.flashCardMockBackEnd = new FlashcardsBackend(userKey);
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

    addCardToDeck(title, question, answer) {
        return this.flashCardMockBackEnd.addCardToDeck(title, {question, answer});
    }


}
