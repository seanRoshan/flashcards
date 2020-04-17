export const APP_ACTION_TYPES = {
    RECEIVE_DECKS: "RECEIVE_DECKS",
    ADD_DECK: "ADD_DECK"
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
