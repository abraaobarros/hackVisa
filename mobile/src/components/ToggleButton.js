import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, View} from 'react-native';
import {CheckBox} from "react-native-elements";
import colors from '../styles/colors'

export default class ToggleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.selected
        }
    }

    _toggle() {
        this.props.onToggle()
        this.setState({
            selected: !this.state.selected
        })
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <CheckBox
                    center
                    title={this.props.title}
                    iconType='entypo'
                    containerStyle={{
                        flex: 1,
                        alignItems: 'flex-start',
                        padding: 20,
                        backgroundColor: 'white',
                        borderColor: '#EEEEEE',
                        borderRadius:10,
                        borderWidth:2,
                        margin:5
                    }}
                    textStyle={{fontSize: 18}}
                    checkedIcon='controller-record'
                    uncheckedIcon='circle'
                    checkedColor={colors.primary}
                    checked={this.state.selected}
                    onPress={() => this._toggle()}
                />
            </View>)
    }
}

const styles = StyleSheet.create({
    selected: {
        shadowColor: '#000000cc',
        shadowOffset: {
            width: -1,
            height: 1
        },
        shadowRadius: 1,
        shadowOpacity: 0.4,
        backgroundColor: '#ddd',
        padding: 10,
        marginTop: 2,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: 'center',
        width: 300,
    },
    notSelected: {
        shadowColor: '#000000cc',
        shadowOffset: {
            width: -1,
            height: 1
        },
        shadowRadius: 1,
        shadowOpacity: 0,
        backgroundColor: '#38bfcd',
        padding: 10,
        marginTop: 2,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: 'center',
        width: 300,
    },
    buttonTxt: {
        fontSize: 18,
        color: 'white'
    },
    notButtonTxt: {
        fontSize: 18,
        color: 'black'
    }
});
