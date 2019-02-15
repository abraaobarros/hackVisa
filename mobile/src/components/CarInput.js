import React from 'react'
import ErrorMessage from './ErrorMessage'
import {StyleSheet, TouchableOpacity, Text, SafeAreaView, ScrollView, View} from 'react-native'
import colors from "../styles/colors";
import HeaderTitle from "./HeaderTitle";
import PrimaryButton from "./PrimaryButton";
import {strings} from "../lang/pt";
import TextInput from "./TextInput";
import FormAreaView from "./FormAreaView";
import {Dropdown} from "react-native-material-dropdown";


export default class CarInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plate: "",
            number: "",
            brand: "",
            color: "",
            plate_error: "",
            colors:[{value:"Prata"},{value:"Azul"},{value: "Vermelho"}, {value:"Cinza"},{value:"Verde"},{value:"Amarelo"},{value:"Preto"},{value:"Branco"},{value:"Rosa"}],
        }
    }

    onValidate = (name, value, validate) => {
        this.setState({[name]: value})
    }

    _handleChangeFirst(text) {
        let value = text.replace(/[0-9]/g, '').toUpperCase()
        console.log(value.substr(0, 3))
        this.setState({
            plate: value.substr(0, 3)
        }, () => {
            if (this.state.plate.length >= 3) {
                this.second.focus();
            }
        });
    }

    _handleChangeSecond(text) {
        console.log(text)
        let value = text.replace(/[^0-9]/g, '').toUpperCase()
        this.setState({
            number: value
        }, () => {
        });
    }

    _check() {
        return true;
    }
    _checkPlate = (plate) => {
        if (plate.length > 8) return false;
        var er = /[a-z]{3}-?\d{4}/gim;
        er.lastIndex = 0;  
        return er.test( plate );    
    }
    selectColor = (colorSelect) =>{
        if(this.state.colors[colorSelect]){
            let color = this.state.colors[colorSelect]; 
            this.setState({color:color.value})
        }
    }
    _next() {
        if(this._checkPlate(this.state.plate)){
            if (this.props.navigation.getParam("onRefresh")) {
                this.props.navigation.state.params.onRefresh({
                    ...this.props.navigation.state.params,
                    [this.props.name]: this.state.plate,
                    "brand": this.state.brand,
                    "label": this.state.brand,
                    "color": this.state.color,
                    car: {
                        [this.props.name]: this.state.plate,
                        "label": this.state.brand,
                        "brand": this.state.brand,
                        "color": this.state.color
                    }
                })
            }
            if (this._check()) {
                this.props.navigation.navigate(this.props.nextScene, {
                    ...this.props.navigation.state.params,
                    [this.props.name]: this.state.plate,
                    "label": this.state.brand,
                    "brand": this.state.brand,
                    "color": this.state.color,
                    car: {
                        [this.props.name]: this.state.plate,
                        "label": this.state.brand,
                        "brand": this.state.brand,
                        "color": this.state.color
                    }
                });
            }
        }else{
            this.setState({plate_error:"Placa inválida"})
        }
        

    }

    render() {
        let {plate_error, colors} = this.state
        return (
            <FormAreaView
                title="Informações do carro"
            >
                <TextInput
                    label="Placa do carro *"
                    autoCapitalize='characters'
                    characterRestriction={8}
                    shouldValidate={true}
                    placeholder="XXX-0000"
                    onChange={(value, validated) => this.onValidate('plate', value, validated)}
                />
                <Text>{plate_error}</Text>
                <Dropdown
                    label='Cor*'
                    onChangeText={(value, index, data) => {this.selectColor(index)}}
                    data={colors}
                />
                <TextInput
                    label="Marca"
                    shouldValidate={true}
                    placeholder="Ex. Fiat Punto"
                    onChange={(value, validated) => this.onValidate('brand', value, validated)}//this.onValidate('job', value, validated)}
                />

                <PrimaryButton
                    onPress={() => {
                        this._next()
                    }}
                    title="Próximo"
                />
            </FormAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        fontSize: 30,
        color: colors.secundary,
        padding: 10,
        width: 100,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.primary,
        textAlign: 'center',
    },
    buttonTxt: {
        fontSize: 22,
        color: 'white'
    }
});
