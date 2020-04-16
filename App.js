import React, {Component} from 'react';
import {View} from 'react-native';
import {ORANGE} from "./utils/colors";
import FlashCardsService from "./services/Flashcards.service";
import AppStatusBarComponent from "./components/AppStatusBar.component";
import {createStore} from "redux";
import reducer from './reducers';
import middleware from './middlewares';
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import MainNavComponent from "./components/MainNav.component";

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
    service.saveDeckTitle(JSON.stringify(new Date())).then((results) => {
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


export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer, middleware)}>
                <View style={{flex: 1}}>
                    <NavigationContainer>
                        <AppStatusBarComponent backgroundColor={ORANGE} barStyle="light-content"/>
                        <MainNavComponent/>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }


}
