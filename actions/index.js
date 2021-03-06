export const APP_ACTION_TYPES = {
    RECEIVE_DECKS: "RECEIVE_DECKS",
    ADD_DECK: "ADD_DECK",
    REMOVE_DECK: "REMOVE_DECK",
    ADD_CARD: "ADD_CARD"
};

export function receiveDecks(decks) {
    return {
        type: APP_ACTION_TYPES.RECEIVE_DECKS,
        decks
    }
}

export function saveDeckTitle(title) {
    return {
        type: APP_ACTION_TYPES.ADD_DECK,
        title
    }
}

export function removeDeck(title) {
    return {
        type: APP_ACTION_TYPES.REMOVE_DECK,
        title
    }
}

export function addCard(title, card) {
    return {
        type: APP_ACTION_TYPES.ADD_CARD,
        title,
        card
    }
}
