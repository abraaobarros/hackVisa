import React from 'react';
import {StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Text, Image, View} from 'react-native'
import connect from "react-redux/es/connect/connect";
import {clearError, hideSpinner} from "../../redux/actions/ui";


class Tutorial extends React.Component {
    static navigationOptions = {header: null}

    constructor() {
        super()
        this.state = {
            value1: 0,
            value2: 0
        }
    }

    componentDidMount() {
        this.props.hideSpinner()
    }

    render() {
        const {navigate} = this.props.navigation;
        const {pending, error} = this.props;
        const resizeMode = 'center';
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('FirstPage')}>
                    <Image
                        source={require('../../resources/img/SUCESSO.png')}
                        style={{
                            backgroundColor: '#ccc',
                            flex: 1,
                            position: 'absolute',
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').height,
                            justifyContent: 'center',
                        }}
                    />
                </TouchableOpacity>
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
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        height: 520,
        width: 170,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        elevation: 1,
    },
    buttonTxt: {
        fontSize: 18,
        textAlign: 'center',
        color: '#444',
    }
});
