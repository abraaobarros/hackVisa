import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default class HeaderIconButton extends React.Component {
    render () {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.onPress}
                color='#CE0026'>
                <Icon name={this.props.icon} size={28} color={colors.primary} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        paddingRight: 15,
        paddingLeft: 15
    }
})
