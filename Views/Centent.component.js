import {StyleSheet, Text, View} from "react-native";
import {BLACK} from "../utils/colors";
import React from "react";


export default function ContentComponent(props) {
    const {content} = props;
    return (
        <View style={styles.resultContainer}>
            <Text style={{color: BLACK, fontSize: 36, textAlign: 'center'}}>{content}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    }
});
