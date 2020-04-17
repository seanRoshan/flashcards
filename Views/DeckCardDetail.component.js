import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import DeckCardComponent from "../components/DeckCard.component";
import FlashCardsService from "../services/Flashcards.service";
import SubmitButtonComponent from "../components/SubmitButton.component";
import {BLUE, PURPLE, WHITE, YELLOW} from "../utils/colors";
import TextButton from "../components/TextButton.component";

class DeckCardDetailComponent extends Component {


    addCard = () => {
        console.log("addCard");
    };

    startQuiz = () => {
        console.log("startQuiz");
    };


    componentDidMount() {
        const {navigation} = this.props;
        const {deckCard} = this.props;
        navigation.setOptions({title: deckCard.title})
    }

    render() {
        const {deckCard} = this.props;
        const {title, counts} = deckCard;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <DeckCardComponent
                        title={title}
                        counts={counts}
                        id={id}
                        disabled={true}
                        {...this.props}/>
                </View>
                <View style={styles.buttonContainer}>
                    <SubmitButtonComponent onPress={() => {
                        this.addCard();
                    }} title="Add Card" color={WHITE} backgroundColor={PURPLE}/>
                    <SubmitButtonComponent onPress={() => {
                        this.addCard();
                    }} title="Start Quiz" color={WHITE} backgroundColor={BLUE}/>
                    <TextButton>REMOVE DECK</TextButton>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: YELLOW,
    },

    header: {
        flex: 2,
        justifyContent: 'space-around'
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});


function mapStateToProps(decks, {route}) {
    const id = route.params.id;
    const deck = decks[id];
    const deckCard = FlashCardsService.formatDeck(deck, id);
    return {
        deckCard,
        id
    }
}

export default connect(mapStateToProps)(DeckCardDetailComponent);
