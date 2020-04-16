import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ORANGE} from "./utils/colors";
import FlashCardsService from "./services/Flashcards.service";

function getDecks() {
    const service = new FlashCardsService("test");
    service.getDecks().then((results) => {
        console.warn(results);
    })
}

function getDeck() {
    const service = new FlashCardsService("test");
    service.getDeck('test').then((results) => {
        console.warn(results);
    })
}

function saveDeckTitle() {
    const service = new FlashCardsService("test");
    service.saveDeckTitle('test').then((results) => {
        console.warn(results);
    })
}


function addCardToDeck() {
    const service = new FlashCardsService("test");
    service.addCardToDeck('test',
        "What is a closure?",
        "The combination of a function and the lexical environment within which that function was declared."
    ).then((results) => {
        console.warn(results);
    })
}


export default function App() {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => getDecks()}>
                <Text style={styles.testText}>Get Decks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getDeck()}>
                <Text style={styles.testText}>Get Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveDeckTitle()}>
                <Text style={styles.testText}>Save Title</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCardToDeck()}>
                <Text style={styles.testText}>Add Card to deck</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    testText: {
        color: ORANGE,
        borderRadius: 25,
        borderColor: ORANGE,
        borderWidth: 1,
        padding: 10
    }
});
