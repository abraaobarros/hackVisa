import React from 'react';
import {StyleSheet, StatusBar, TouchableOpacity, ImageBackground, Dimensions, Text, Image, View} from 'react-native'
import Carousel from "react-native-carousel-view";
import connect from "react-redux/es/connect/connect";
import {strings} from "../lang/pt";
import {clearError, hideSpinner} from "../../redux/actions/ui";
import colors from "../styles/colors"
import HeaderConfig from "../components/HeaderConfig";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


class Tutorial extends React.Component {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        StatusBar.setHidden(true);
        this.props.hideSpinner()
    }

    render() {
        const {navigate} = this.props.navigation;
        const {pending, error} = this.props;
        const resizeMode = 'center';
        return (
            <View>
                <Image
                    source={require('../../resources/img/MENU.png')}
                    style={{
                        backgroundColor: '#ccc',
                        flex: 1,
                        position: 'absolute',
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        justifyContent: 'flex-start',
                    }}
                />
                <View style={styles.container}>
                    <View style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        height: Dimensions.get('window').height * 0.6,
                        width: Dimensions.get('window').width,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{flexDirection: 'row', margin: 40}}>
                            <View>
                                <Text style={{fontSize: 25, marginTop:74, marginRight:16}}>1506,00</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <TouchableOpacity
                                    style={[styles.button, {alignItems: 'center'}]}
                                    color='#38bfcd'
                                    onPress={() => {
                                        this.props.navigation.navigate("Charge")
                                    }}>
                                    <Text style={styles.buttonTxt}>COBRAR</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, {alignItems: 'center'}]}
                                    color='#38bfcd'
                                    onPress={() => {
                                        this.props.navigation.navigate("CreateCompany")
                                    }}>
                                    <Text style={styles.buttonTxt}>QUERO SER ENCONTRADO</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column'
                                }}>
                                <TouchableOpacity
                                    style={[styles.button, {alignItems: 'center'}]}
                                    color='#38bfcd'
                                    onPress={() => {
                                        this.props.navigation.navigate("Checkout", {value: 300})
                                    }}>
                                    <Text style={styles.buttonTxt}>ENCONTRAR MATERIAIS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, {alignItems: 'center'}]}
                                    color='#38bfcd'
                                    onPress={() => {
                                        this.props.navigation.navigate("QRReader")
                                    }}>
                                    <Text style={styles.buttonTxt}>PAGAR AGORA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => ({error: state.ui.error, success: state.ui.success, pending: state.ui.pending})
export default connect(mapStateToProps, {clearError, hideSpinner})(Tutorial);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        // backgroundColor: '#fff',
        alignItems: 'center'
    },
    carousel_wrap: {
        alignItems: 'stretch',
        justifyContent: 'center',
        marginBottom: 30,
    },
    carousel_page_wrapper: {
        flexDirection: 'column',
        marginBottom: 30,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center'
    },
    carousel_page: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: "flex-end",
        margin: 'auto',
    },
    carousel_page_img: {
        marginBottom: 30,
        height: Dimensions.get('window').height * 0.2,
        resizeMode: 'contain'
    },
    carousel_page_title: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#444',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    carousel_page_text: {
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#111',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    button: {
        padding: 15,
        height: 200,
        color:"#fff",
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
    },
    buttonTxt: {
        marginTop:60,
        fontSize: 18,
        width:128,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#fff',
    }
});
