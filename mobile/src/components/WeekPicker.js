import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import ToggleButton from './ToggleButton';
import HeaderTitle from "./HeaderTitle";
import colors from "../styles/colors";

export default class WeekPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sunday: false,
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
        }
    }

    _next = () => {

        // linked list of navigation data
        // TODO extend new parent component with chain pattern
        if (this.props.navigation.state.params.onRefresh) {
            this.props.navigation.state.params.onRefresh({
                ...this.props.navigation.state.params,
                ...this.state
            })
        }
        this.props.navigation.navigate(this.props.nextScene, {
            ...this.props.navigation.state.params,
            ...this.state
        })

    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                flexDirection: 'column',
            }}>

                <ScrollView>
                    <View style={{flex: 1, padding: 20}} ref={(img) => {
                        this.backgroundImage = img;
                    }}
                    >
                        <View style={{marginBottom:20}}>
                            <HeaderTitle
                                title={this.props.title}
                            />
                        </View>
                        <ToggleButton selected={this.state.sunday} onToggle={() => {
                            this.setState({sunday: !this.state.sunday})
                        }} title="Todo Domingo"/>
                        <ToggleButton selected={this.state.monday} onToggle={() => {
                            this.setState({monday: !this.state.monday})
                        }} title="Toda Segunda-feira"/>
                        <ToggleButton selected={this.state.tuesday} onToggle={() => {
                            this.setState({tuesday: !this.state.tuesday})
                        }} title="Toda Terça-feira"/>
                        <ToggleButton selected={this.state.wednesday} onToggle={() => {
                            this.setState({wednesday: !this.state.wednesday})
                        }} title="Toda Quarta-feira"/>
                        <ToggleButton selected={this.state.thursday} onToggle={() => {
                            this.setState({thursday: !this.state.thursday})
                        }} title="Toda Quinta-feira"/>
                        <ToggleButton selected={this.state.friday} onToggle={() => {
                            this.setState({friday: !this.state.friday})
                        }} title="Toda Sexta-feira"/>
                        <ToggleButton selected={this.state.saturday} onToggle={() => {
                            this.setState({saturday: !this.state.saturday})
                        }} title="Todo Sábado"/>

                        <TouchableOpacity style={{flexDirection: 'row',}}
                                          onPress={this._next}>
                            <Text style={styles.saveButtonText}>
                                Próximo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    nextButton: {
        backgroundColor: '#38bfcd',
        padding: 10,
        marginTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
    },
    nextButtonTxt: {
        fontSize: 22,
        color: 'white'
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
});
