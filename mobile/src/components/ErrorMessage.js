import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default class ErrorMessage extends React.Component {

    render() {
        if (this.props.message != null) {
            return (
                <Text style={{color: 'red', textAlign: this.props.textAlign}}>
                    {this.props.message}
                </Text>
            )
        } else {
            return null;
        }
    }

}