import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class DeckCardDetailComponent extends Component {
    render() {
        const {decks, id} = this.props;
        return (
            <View>
                <Text>
                    {JSON.stringify(decks[id])}
                </Text>
            </View>
        );
    }
}

function mapStateToProps(decks, {route}) {
    return {
        decks,
        id: route.params.id
    }
}

export default connect(mapStateToProps)(DeckCardDetailComponent);
