import React from 'react'
import {StyleSheet, View} from 'react-native'
import TextField from "react-native-material-textfield/src/components/field";
import {validateEmail} from "../services/Validation";
import {strings} from "../lang/pt";
import FormInput from "./FormInput";
import colors from "../styles/colors";


export default class EmailInput extends FormInput {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            error: ""
        }
    }

    onFocus = () => {
        this.setState({error: ""})
    }

    onBlur = () => {
        if (!this.validate()) {
            this.setState({error: strings.errors.email_invalid})
        } else {
            this.setState({error: ""})
        }
    }

    validate = () => {
        return validateEmail(this.state.value)
    }


    componentDidUpdate(prevProps, prevState, prevContext) {
        if (!prevProps.validate && this.props.validate) {
            this.onBlur()
        }
    }

    render() {
        let {label, value} = this.props;
        value = value === "" ? this.state.value : value;
        let { error } = this.state;
        return (
            <View>
                <TextField
                    value={value}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    enablesReturnKeyAutomatically={true}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={(value) => this.onChange(value.trim())}
                    returnKeyType='next'
                    tintColor={colors.secundary}
                    label={label}
                    fontSize={20}
                    error={error}
                />
            </View>
        )
    }
}
