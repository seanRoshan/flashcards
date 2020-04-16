import FlashcardsBackend from "../backend/Flashcards.backend";

export default class FlashCardsService {

    constructor(userKey) {
        this.flashCardMockBackEnd = new FlashcardsBackend(userKey);
    }

    static formatDecks(results) {
        return Object.keys(results).map((key) => {
            const deckCard = results[key];
            return {...deckCard, id: key, counts: deckCard.questions.length}
        });
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
