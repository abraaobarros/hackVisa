import React from "react";
import {AppState,View,SafeAreaView, Text} from "react-native";
import {createSwitchNavigator, createStackNavigator} from "react-navigation";
import {Login, ForgotPassword, MainTabNavigation, AuthLoadingScreen} from "./src/scenes";
import {Provider} from 'react-redux'
import {configureStore} from './redux'
import {testing_env, base} from "./redux/URLs"
import FCM from "react-native-fcm"
import colors from "./src/styles/colors";
import FirstPage from "./src/scenes/FirstPage";
import Charge from "./src/scenes/Charge";
import QRReader from "./src/scenes/QRReader";
import Cash from "./src/scenes/Cash";
import Checkout from "./src/scenes/Checkout";

const store = configureStore()


class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>

                    <AppNavigator/>
                    {testing_env ?
                        <SafeAreaView style={{position:'absolute', top:0, left:0, right:0, flex:1,  alignItems: 'center', backgroundColor:colors.secundary}}>
                            <Text style={{flex:1, padding:1, color:'white', fontSize:10}}>Ambiente de testes</Text>
                        </SafeAreaView>:null
                    }
                </View>
            </Provider>
        )
    }
}

const AppNavigator = createStackNavigator({
    FirstPage,
    Charge,
    Cash,
    QRReader,
    Checkout
});


export default App;
