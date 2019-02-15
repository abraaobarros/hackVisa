import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class HeaderTextButton extends React.Component {
    render () {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.onPress}
                color='#38bfcd'>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        paddingRight: 15,
        paddingLeft: 15
    },
    text: {
        color: '#38bfcd'
    }
})