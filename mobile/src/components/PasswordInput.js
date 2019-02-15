import React from 'react'
import {StyleSheet, View} from 'react-native'
import TextField from "react-native-material-textfield/src/components/field";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {strings} from "../lang/pt";
import {
    validate8digits,
    validateOneEspecialLetter,
    validateOneLetterUpperCase,
    validateOneNumber
} from "../services/Validation";
import FormInput from "./FormInput";
import colors from "../styles/colors";


export default class PasswordInput extends FormInput {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            error: "",
            secureTextEntry: true,
        }
    }

    onFocus = () => {
        this.setState({error: ""});
    }

    onBlur = async () => {
        await this.validate()
    }

    validate = async () => {
        if (this.props.shouldValidate === false) return true;
        if (this.state.value === "")

            await this.setState({error: strings.errors.empty_password});

        else if (!validateOneLetterUpperCase(this.state.value)) {

            await this.setState({error: strings.errors.one_letter_uppercase_password});

        } else if (!validateOneNumber(this.state.value)) {

            await this.setState({error: strings.errors.validate_one_number});

        } else if (!validateOneEspecialLetter(this.state.value)) {

            await this.setState({error: strings.errors.validate_one_especial_letter});

        } else if (!validate8digits(this.state.value)) {

            await this.setState({error: strings.errors.validate8digits});

        } else {
            await this.setState({error: ""});
            return true;
        }

        return false;
    }

    onAccessoryPress = () => {
        this.setState(({secureTextEntry}) => ({secureTextEntry: !secureTextEntry}));
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (!prevProps.validate && this.props.validate) {
            this.onBlur()
        }
    }

    renderPasswordAccessory = () => {

        let {secureTextEntry} = this.state;

        let name = secureTextEntry ?
            'visibility' :
            'visibility-off';

        return (
            <MaterialIcon
                size={24}
                name={name}
                color={TextField.defaultProps.baseColor}
                onPress={this.onAccessoryPress}
                suppressHighlighting
            />
        );
    }

    render() {
        let {label, ref} = this.props;
        let {value, error, secureTextEntry} = this.state;
        return (
            <View>
                <TextField
                    ref={ref}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize='none'
                    fontSize={20}
                    tintColor={colors.secundary}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    clearTextOnFocus={true}
                    onFocus={this.onFocus}
                    onChangeText={this.onChange}
                    returnKeyType='done'
                    label={label}
                    error={error}
                    maxLength={30}
                    characterRestriction={20}
                    renderAccessory={this.renderPasswordAccessory}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        color: '#6d6e71',
        margin: 14,
        minWidth: 280,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
