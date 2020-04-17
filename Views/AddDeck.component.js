import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ORANGE, WHITE, YELLOW} from "../utils/colors";
import {connect} from 'react-redux';
import FlashCardsService from "../services/Flashcards.service";
import {saveDeckTitle} from "../actions";
import SubmitButtonComponent from "../components/SubmitButton.component";

class AddDeckComponent extends Component {

    state = {
        title: ""
    }


    changeTitle = (newValue) => {
        this.setState(() => ({
            title: newValue
        }));
    };


    toDeckDetailPage = (id) => {
        const {navigation} = this.props;
        navigation.navigate(
            'DeckCardDetail',
            {id}
        )
    }

    submit = () => {

        const {title} = this.state;
        const {saveDeckTitle, flashCardsService} = this.props;

        saveDeckTitle(title);

        this.setState(() => ({
            title: ""
        }));

        this.toDeckDetailPage(title);

        flashCardsService.saveDeckTitle(title);
    };


    render() {
        const {title} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of you new deck?</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={this.changeTitle}
                    value={title}
                />
                <SubmitButtonComponent disabled={!title} onPress={() => {
                    this.submit(title);
                }} title="Create Deck" color={WHITE} backgroundColor={ORANGE}/>
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


function mapStateToProps() {
    const flashCardsService = new FlashCardsService('test');
    return {
        flashCardsService
    }
}


function mapDispatchToProps(dispatch) {
    return {
        saveDeckTitle: (title) => dispatch(saveDeckTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeckComponent);
