import React from 'react'
import { View} from 'react-native'
import TextField from "react-native-material-textfield/src/components/field";
import FormInput from "./FormInput";
import colors from "../styles/colors";
import {strings} from "../lang/pt";

export default class TextInput extends FormInput {

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
        this.validate()
    }

    validate = () =>{
        if (this.state.value === "" && this.props.shouldValidate) {
            this.setState({error:strings.errors.empty_field})
            return false;
        } else {
            this.setState({error:""})
            return true
        }
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (!prevProps.validate && this.props.validate) {
            this.onBlur()
        }
    }


    render() {
        let {label, ref, placeholder, autoCapitalize,characterRestriction} = this.props;
        let {value, error} = this.state;
        return (
            <View>
                <TextField
                    ref={ref}
                    value={value}
                    keyboardType='default'
                    autoCapitalize={autoCapitalize ? autoCapitalize:'words'}
                    autoCorrect={false}
                    autoFocus={this.props.autoFocus}
                    onSubmitEditing={this.props.onSubmitEditing}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    returnKeyType='next'
                    tintColor={colors.secundary}
                    placeholder={placeholder}
                    label={label}
                    fontSize={20}
                    error={error}
                    characterRestriction={characterRestriction ? characterRestriction:999}
                />
            </View>
        )
    }
}
