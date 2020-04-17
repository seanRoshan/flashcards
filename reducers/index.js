import {APP_ACTION_TYPES} from "../actions";

function decks(state = {}, action) {
    switch (action.type) {
        case APP_ACTION_TYPES.RECEIVE_DECKS: {
            return {
                ...state,
                ...action.decks
            }
        }
        case APP_ACTION_TYPES.ADD_DECK: {
            const {title} = action;
            return {
                ...state,
                [title]: {title, questions: []}
            }
        }
        default: {
            return state;
        }
    }
}

export default decks;
