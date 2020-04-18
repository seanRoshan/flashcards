import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import FlashCardsService from "../services/Flashcards.service";
import {receiveDecks} from "../actions";
import DeckCardComponent from "../components/DeckCard.component";
import {YELLOW} from "../utils/colors";
import ContentComponent from "./Centent.component";

class DeckListComponent extends Component {

    componentDidMount() {
        const {getDecks} = this.props;
        getDecks();
    }

    render() {
        const {decks} = this.props;
        const deckCards = FlashCardsService.formatDecks(decks);
        const counts = Object.keys(decks).length;
        return (
            <SafeAreaView style={styles.container}>
                {counts > 0
                    ? (<FlatList
                        data={deckCards}
                        renderItem={({item}) => {
                            const {title, counts, id} = item;
                            return (<DeckCardComponent title={title} counts={counts} id={id} {...this.props}/>)
                        }}
                        keyExtractor={item => item.id}
                    />)
                    : (<ContentComponent content="YOU HAVE NO DECK"/>)
                }

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: YELLOW
    }
});


function mapStateToProps(decks) {
    return {decks};
}

function mapDispatchToProps(dispatch) {
    const flashCardsService = new FlashCardsService('test');
    return {
        getDecks: async () => {
            const results = await flashCardsService.getDecks();
            dispatch(receiveDecks(results));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeckListComponent);
