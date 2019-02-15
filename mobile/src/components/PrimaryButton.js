import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from "../styles/colors";


export default class ddPrimaryButton extends React.Component {

    render () {
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.button, this.props.style]}>
                <Text style={styles.buttonTxt}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.primary,
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
        borderRadius:4,
        flex: 1,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        elevation: 1,

    },

    buttonTxt: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
    }

});
