import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import DeckCardComponent from "../components/DeckCard.component";
import FlashCardsService from "../services/Flashcards.service";
import SubmitButtonComponent from "../components/SubmitButton.component";
import {BLUE, PURPLE, WHITE, YELLOW} from "../utils/colors";
import TextButton from "../components/TextButton.component";
import {removeDeck} from "../actions";

class DeckCardDetailComponent extends Component {


    toAddCard = () => {
        const {navigation, id} = this.props;
        navigation.navigate(
            'AddCard',
            {id}
        )
    }

    toQuiz = () => {
        const {navigation} = this.props;
        navigation.navigate(
            'Quiz',
            {id}
        )
    };

    toHome = () => {
        const {navigation} = this.props;
        navigation.navigate(
            'Home',
        )
    };

    removeDeck = () => {
        const {id, flashCardsService, removeDeckTitle} = this.props;

        removeDeckTitle(id);

        this.toHome();

        flashCardsService.removeDeckTitle(id);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !!nextProps.id;
    }

    componentDidMount() {
        const {navigation} = this.props;
        const {deckCard} = this.props;
        navigation.setOptions({title: deckCard.title})
    }

    render() {
        const {deckCard} = this.props;
        const {title, counts, id} = deckCard;
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
                        this.toAddCard();
                    }} title="Add Card" color={WHITE} backgroundColor={PURPLE}/>
                    <SubmitButtonComponent onPress={() => {
                        this.toQuiz();
                    }} title="Start Quiz" color={WHITE} backgroundColor={BLUE}/>
                    <TextButton onPress={() => {
                        this.removeDeck()
                    }}>REMOVE DECK</TextButton>
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
    if (!route) return;
    const id = route.params.id;
    if (!id) return {};
    const deck = decks[id];
    if (!deck) return {};
    const deckCard = FlashCardsService.formatDeck(deck, id);
    const flashCardsService = new FlashCardsService('test');
    return {
        deckCard,
        id,
        flashCardsService
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeDeckTitle: (title) => dispatch(removeDeck(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckCardDetailComponent);
