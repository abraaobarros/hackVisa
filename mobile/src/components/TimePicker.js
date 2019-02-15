import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, SafeAreaView, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ActionSheet from 'react-native-actionsheet';
import colors from "../styles/colors";
import TextInput from "./TextInput";
import HeaderTitle from "./HeaderTitle";

export default class DateTimePickerTester extends Component {
    state = {
        isDateTimePickerVisible: false,
        value: ""
    };

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {
        this.setState({value: date})
        this.ActionSheet.show()
    };

    _next = (index) => {
        let tolerance = 5 + 5 * index;
        let date = this.state.value;
        this._hideDateTimePicker();
        if (this.props.navigation.state.params.onRefresh) {
            this.props.navigation.state.params.onRefresh({
                ...this.props.navigation.state.params,
                [this.props.name]: date,
                "tolerance": tolerance
            })
        }
        this.props.navigation.navigate(this.props.nextScene, {
            ...this.props.navigation.state.params,
            [this.props.name]: date,
            "tolerance": tolerance
        })

    }

    changeValue = (data) => {

    }

    render() {
        let {value} = this.state;
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                flexDirection: 'column',
            }}>
                <View style={{flex: 1, padding: 20}} ref={(img) => {
                    this.backgroundImage = img;
                }}
                >
                    <HeaderTitle title={this.props.title}/>
                    <TouchableOpacity style={{flexDirection: 'row',}}
                                      onPress={this._showDateTimePicker}>
                        <Text style={styles.saveButtonText}>
                            Escolher Horário
                        </Text>
                    </TouchableOpacity>

                    <DateTimePicker
                        mode='time'
                        cancelTextIOS='Cancelar'
                        titleIOS='Escolha uma horário'
                        confirmTextIOs='Selecionar'
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />

                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={'Qual seria a tolerância máxima de tempo?'}
                        options={['5min', '10min', '15min', '20min']}
                        cancelButtonIndex={4}
                        destructiveButtonIndex={4}
                        onPress={(index) => {
                            this._next(index)
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    saveButtonText: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        textAlign: 'center',
        padding: 15,
        marginTop: 10,
        backgroundColor: colors.primary,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        elevation: 1,
        fontSize: 22,
        color: '#fff',
    },
    item: {
        backgroundColor: '#eee',
        marginBottom: 2,
        flex: 1,
        width: 300,
        padding: 20
    },
    itemHighlight: {
        backgroundColor: '#d4e9ed',
        marginBottom: 2,
        flex: 1,
        width: 300,
        padding: 20
    },
    notButton: {
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30,
        marginBottom: 100,
    },
    notButtonTxt: {
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
    },
    loginInput: {
        fontSize: 18,
        color: '#6d6e71',
        margin: 14,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    error: {
        color: 'red',
        textAlign: 'left'
    },
    button: {
        backgroundColor: '#38bfcd',
        padding: 10,
        marginTop: 10,

        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
    },
    notSelectedButton: {
        backgroundColor: '#6d6e71',
        padding: 10,
        marginTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
    },
    buttonTxt: {
        fontSize: 22,
        color: 'white'
    }
});
