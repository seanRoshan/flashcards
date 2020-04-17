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
        case APP_ACTION_TYPES.REMOVE_DECK: {
            const {title} = action;
            const {[title]: value, ...newState} = state;
            return newState
        }

        case APP_ACTION_TYPES.ADD_CARD: {
            const {title, card} = action;
            return {
                ...state,
                [title]: {
                    ...state[title],
                    ["questions"]: state[title].questions.concat(card)
                }
            }
        }

        default: {
            return state;
        }
    }
}

export default decks;
