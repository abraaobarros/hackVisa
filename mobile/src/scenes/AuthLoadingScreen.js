import React from 'react'
import {View, StyleSheet, Image, StatusBar, ActivityIndicator, AsyncStorage, Dimensions} from "react-native";
import {Auth} from "../services";
import connect from "react-redux/es/connect/connect";
import {createUser} from "../../redux/actions/api";
import {login} from "../../redux/actions/auth";
import {getTokenFCM, registerAppListener, startFCM} from '../services/fcm';
import FCM from "react-native-fcm";

class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        FCM.requestPermissions()
            .then(result => console.log(result))
            .catch(e => console.log(e))
        // startFCM(this).done()
        this.isAuth().done();
    }

    async isAuth() {
        this.props.navigation.navigate("FirstPage")
    }

    static async check() {
        const token = await AsyncStorage.getItem('token');
        return token != null;
    }

    static async userDetail() {
        const user = JSON.parse(await AsyncStorage.getItem('loggedUser'));
        return user;
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../resources/img/bg.png')}
                    style={{
                        backgroundColor: '#ccc',
                        flex: 1,
                        position: 'absolute',
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        justifyContent: 'center',
                    }}
                />
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

const mapStateToProps = state => ({error: state.ui.error.has, success: state.ui.success, pending: state.ui.pending})
export default connect(mapStateToProps, {login})(AuthLoadingScreen);
