import React from 'react'
import {StyleSheet, View} from 'react-native'
import TextField from "react-native-material-textfield/src/components/field";
import {validateDDD, validateEmail, validatePhone} from "../services/Validation";
import {strings} from "../lang/pt";
import FormInput from "./FormInput";
import colors from "../styles/colors";

export default class TelInput extends FormInput {

    constructor(props) {
        super(props)
        this.state = {
            ddd: "",
            tel: "",
            ddd_error: '',
            tel_error: '',
            hasError: false
        }
    }

    onFocus = () => {
        this.setState({
            ddd_error: '',
            tel_error: '',
        })
    }

    onBlurDDD = () => {
        if (!validateDDD(this.state.ddd)) {
            this.setState({ddd_error: strings.errors.ddd_invalid, hasError: true})
        } else {
            this.setState({ddd_error: "", hasError: false})
        }
    }


    onBlurTel = () => {
        if (!validatePhone(this.state.tel)) {
            this.setState({tel_error: strings.errors.tel_invalid, hasError: true})
        } else {
            this.setState({tel_error: "", hasError: false})
        }
    }

    onChangeText = async (name, value) => {
        await this.setState({[name]: value})
        this.onChange(`+55${this.state.ddd}${this.state.tel}`)
    }

    validate = () => {
        return validateDDD(this.state.ddd) && validatePhone(this.state.tel)
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (!prevProps.validate && this.props.validate) {
            this.onBlurDDD()
            this.onBlurTel()
        }
    }

    render() {
        let {tel, ddd, ddd_error, tel_error} = this.state;
        let {label} = this.props;
        return (
            <View>
                <TextField
                    value={ddd}
                    keyboardType='numeric'
                    autoCapitalize='none'
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onFocus={this.onFocus}
                    onBlur={this.onBlurDDD}
                    onChangeText={(value) => this.onChangeText('ddd', value)}
                    returnKeyType='next'
                    tintColor={colors.secundary}
                    label='DDD *'
                    fontSize={20}
                    maxLength={2}
                    characterRestriction={2}
                    error={ddd_error}
                />

                <TextField
                    value={tel}
                    keyboardType='numeric'
                    autoCapitalize='none'
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onFocus={this.onFocus}
                    onBlur={this.onBlurTel}
                    onChangeText={(value) => this.onChangeText('tel', value)}
                    onSubmitEditing={this.onSubmitTel}
                    returnKeyType='next'
                    tintColor={colors.secundary}
                    label='Celular *'
                    fontSize={20}
                    maxLength={9}
                    characterRestriction={9}
                    error={tel_error}
                />
            </View>
        )
    }
}
