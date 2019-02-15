import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';


export default class SecondaryButton extends React.Component {

    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={styles.button}
                color='#38bfcd'>
                <Text style={styles.buttonText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

    button: {
        flex: 1,
        margin: 20,
        marginTop: 8
    },

    buttonTxt: {
        color: '#444',
        textAlign: 'right',
        textDecorationLine: 'underline',
    },

});