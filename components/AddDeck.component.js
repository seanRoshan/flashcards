import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ORANGE, WHITE} from "../utils/colors";
import {connect} from 'react-redux';
import FlashCardsService from "../services/Flashcards.service";
import {saveDeckTitle} from "../actions";

function SubmitBtn({onPress}) {
    return (
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
    )
}

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
                <SubmitBtn onPress={() => {
                    this.submit(title);
                }}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
    },
    iosSubmitBtn: {
        backgroundColor: ORANGE,
        padding: 10,
        borderRadius: 25,
        height: 45,
        paddingLeft: 50,
        paddingRight: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    androidSubmitBtn: {
        backgroundColor: ORANGE,
        padding: 10,
        borderRadius: 25,
        height: 45,
        paddingLeft: 50,
        paddingRight: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    submitBtnText: {
        color: WHITE,
        fontSize: 22,
        textAlign: 'center'
    },
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
