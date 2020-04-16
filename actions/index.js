export const APP_ACTION_TYPES = {
    RECEIVE_DECKS: "RECEIVE_DECKS",
};

export function receiveDecks(decks) {
    return {
        type: APP_ACTION_TYPES.RECEIVE_DECKS,
        decks
    }
}
