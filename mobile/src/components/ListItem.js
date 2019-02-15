import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class ListItem extends React.Component {

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress? this.props.onPress() : null}>
                {this.props.avatar ? <Image source={{uri: this.props.avatar}} style={styles.avatar}/> : null}
                {this.props.leftIcon}
                <View style={styles.info}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <Text style={styles.subtitle}>{this.props.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },

    info: {
        flex: 1,
        justifyContent: 'center',
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },

    title: {
        fontSize: 16,
    },

    subtitle: {
        fontSize: 14,
        color: "#a8a8a8"
    },

});
