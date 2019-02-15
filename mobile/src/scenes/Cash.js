import React from "react";
import {Ionicons} from 'react-native-vector-icons';

import FormAreaView from "../components/FormAreaView";
import {Dimensions, Text, View,Image} from 'react-native'
import QRCode from 'react-native-qrcode';

export default class CreateUser extends React.Component {

    static navigationOptions = {header:null}

    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            value:"",
            loading: 1,
            submit: false,
            validated: {
                name: false,
                tel: false,
                password: false,
            }
        };
    }

    render() {
        let {errors = {}, submit} = this.state;
        let {error} = this.props
        if (error != null) errors.password = error
        return (
            <FormAreaView
                title="Cobrar"
            >
                <Image
                    source={require('../../resources/img/COBRAR_STEP2.png')}
                    style={{
                        backgroundColor: '#ccc',
                        flex: 1,
                        position: 'absolute',
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        justifyContent: 'flex-start',
                    }}
                />
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{marginTop: 27, fontSize:20}}>{this.props.navigation.getParam('value')},00</Text>
                </View>
                <View
                    style={{alignItems: 'center',
                    marginTop: 100}}
                >
                    <QRCode
                        value={this.state.value}
                        size={200}
                        bgColor='black'
                        fgColor='white'/>
                </View>
            </FormAreaView>
        )
    }
}

