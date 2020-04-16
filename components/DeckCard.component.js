import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLACK, BLUE, ORANGE, RED, WHITE, YELLOW} from "../utils/colors";
import {connect} from 'react-redux';

class DeckCardComponent extends Component {
    render() {
        const {title, counts, id, navigation} = this.props;
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(
                    'DeckCardDetail',
                    {id}
                )}
                activeOpacity={0.5}
                style={styles.item}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={{
                        color: counts ? YELLOW : RED,
                        marginRight: 5
                    }}>
                        {counts ? counts : "EMPTY DECK"}
                    </Text>
                    {counts > 0 &&
                    <Text style={{color: BLUE}}>
                        {counts === 1 ? 'card' : 'cards'}
                    </Text>}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: BLACK,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        borderColor: ORANGE,
        borderWidth: 5,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 5,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 16,
    },
    title: {
        color: WHITE,
        fontSize: 18,
    }
});

export default connect()(DeckCardComponent);
