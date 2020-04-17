import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from "react-native";

function SubmitButtonComponent(props) {
    const {onPress, color, backgroundColor, title, disabled} = props;
    return (
        <TouchableOpacity
            disabled = {disabled}
            style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, {backgroundColor}]}
            onPress={onPress}>
            <Text style={[styles.submitBtnText, {color}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
        padding: 10,
        borderRadius: 25,
        height: 45,
        paddingLeft: 50,
        paddingRight: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    androidSubmitBtn: {
        padding: 10,
        borderRadius: 25,
        height: 45,
        paddingLeft: 50,
        paddingRight: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    submitBtnText: {
        fontSize: 22,
        textAlign: 'center'
    },
});

export default SubmitButtonComponent;
