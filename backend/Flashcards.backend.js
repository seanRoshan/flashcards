import {AsyncStorage} from 'react-native';

export default class FlashcardsBackend {

    constructor(userToken) {
        this.FLASHCARD_STORAGE_KEY = userToken;
    }


    getDecks() {
        return new Promise(async (resolve, reject) => {
            try {
                const results = await AsyncStorage.getItem(this.FLASHCARD_STORAGE_KEY, null);
                return resolve(JSON.parse(results));
            } catch (e) {
                return reject(e);
            }
        });
    }

    getDeck(title) {
        return new Promise(async (resolve, reject) => {
            try {
                const decks = await this.getDecks();
                return resolve(decks[title])
            } catch (e) {
                return reject(e);
            }
        });
    }

    saveDeckTitle(title) {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.mergeItem(this.FLASHCARD_STORAGE_KEY, JSON.stringify({
                    [title]: {
                        title,
                        questions: []
                    }
                }))
                return resolve(true);
            } catch (e) {
                return reject(e);
            }
        });
    }

    addCardToDeck(title, questionCard) {
        return new Promise(async (resolve, reject) => {
            try {
                const decks = await this.getDecks();
                decks[title].questions.push(questionCard)
                await AsyncStorage.setItem(this.FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
                return resolve(true);
            } catch (e) {
                return reject(e);
            }
        });
    }
}
