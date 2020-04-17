import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {BLACK, ORANGE, WHITE, YELLOW} from "../utils/colors";
import SubmitButtonComponent from "../components/SubmitButton.component";
import FlashCardsService from "../services/Flashcards.service";
import {addCard} from "../actions";
import {connect} from 'react-redux';

class AddCardComponent extends Component {

    state = {
        question: "",
        answer: ""
    }

    toDeckDetail = (id) => {
        const {navigation} = this.props;
        navigation.navigate(
            'DeckCardDetail',
            {id}
        )
    };


    changeQuestions = (question) => {
        this.setState(() => ({
            question
        }));
    }

    changeAnswer = (answer) => {
        this.setState(() => ({
            answer
        }));
    }

    submit = (title) => {
        const {flashCardsService, addCard} = this.props;
        const {question, answer} = this.state;

        addCard(title, {question, answer});

        this.toDeckDetail(title);

        flashCardsService.addCardToDeck(title, {question, answer});
    }


    render() {
        const {id} = this.props;
        const {question, answer} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Create a new Card</Text>
                <TextInput
                    placeholder="Question"
                    placeholderTextColor={BLACK}
                    style={styles.inputField}
                    onChangeText={this.changeQuestions}
                    value={question}
                />
                <TextInput
                    placeholder="Answer"
                    placeholderTextColor={BLACK}
                    style={styles.inputField}
                    onChangeText={this.changeAnswer}
                    value={answer}
                />
                <SubmitButtonComponent disabled={!(question && answer)} onPress={() => {
                    this.submit(id);
                }} title="Create a new card" color={WHITE} backgroundColor={ORANGE}/>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: YELLOW,
        justifyContent: 'center'
    },
    inputField: {
        height: 40,
        padding: 10,
        marginBottom: 30,
        borderColor: ORANGE,
        borderWidth: 1
    },
    title: {
        color: ORANGE,
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 30
    }
});


function mapStateToProps({}, {route}) {
    const id = route.params.id;
    const flashCardsService = new FlashCardsService('test');
    return {
        flashCardsService,
        id
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addCard: (title, card) => dispatch(addCard(title, card))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddCardComponent);
