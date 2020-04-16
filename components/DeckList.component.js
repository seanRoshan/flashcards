import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import FlashCardsService from "../services/Flashcards.service";
import {receiveDecks} from "../actions";
import DeckCardComponent from "./DeckCard.component";
import {RED} from "../utils/colors";

class DeckListComponent extends Component {


    getDecks = () => {
        // this.service.getDecks().then((decks) => {
        //
        // });
    };


    componentDidMount() {
        const {getDecks} = this.props;
        getDecks();
    }

    render() {
        const {decks} = this.props;
        const deckCards = FlashCardsService.formatDecks(decks);
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={deckCards}
                    renderItem={({item}) => {
                        const {title, counts, id} = item;
                        return (<DeckCardComponent title={title} counts={counts} id={id} {...this.props}/>)
                    }}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
