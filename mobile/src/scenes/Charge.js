import React from 'react';
import {StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Text, Image, View} from 'react-native'
import connect from "react-redux/es/connect/connect";
import {strings} from "../lang/pt";
import {clearError, hideSpinner} from "../../redux/actions/ui";
import FormAreaView from "../components/FormAreaView";
import {TextField} from "react-native-material-textfield";


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

    getValue(){
        return parseInt(this.state.value1) + parseInt(this.state.value2)
    }

    render() {
        const {navigate} = this.props.navigation;
        const {pending, error} = this.props;
        const resizeMode = 'center';
        return (
            <FormAreaView
                title={strings.titles.create_user_title}
            >
                <Image
                    source={require('../../resources/img/COBRAR.png')}
                    style={{
                        backgroundColor: '#ccc',
                        flex: 1,
                        position: 'absolute',
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        justifyContent: 'flex-start',
                    }}
                />
                <View style={{marginTop:140}}>
                    <TextField
                        // ref={ref}
                        // value={value}
                        containerStyle={{
                            padding:10,
                            color: 'white'
                        }}
                        tintColor='rgb(0, 145, 234)'
                        labelTextStyle={{
                            colors:'white'
                        }}

                        keyboardType='default'
                        // autoCapitalize={autoCapitalize ? autoCapitalize:'words'}
                        autoCorrect={false}
                        autoFocus={true}
                        onSubmitEditing={this.props.onSubmitEditing}
                        enablesReturnKeyAutomatically={true}
                        onChangeText={(value)=>this.setState({value1:value})}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        returnKeyType='next'
                        // tintColor={colors.secundary}
                        // placeholder={placeholder}
                        label="Mão de obra: R$"
                        fontSize={20}
                        suffix=",00"
                        // error={error}
                        // characterRestriction={characterRestriction ? characterRestriction:999}
                    />

                    <TextField
                        // ref={ref}
                        // value={value}
                        keyboardType='default'
                        containerStyle={{
                            padding:10,
                            marginTop:30,
                            color: 'white'
                        }}
                        tintColor='rgb(0, 145, 234)'
                        labelTextStyle={{
                            colors:'white'
                        }}
                        // autoCapitalize={autoCapitalize ? autoCapitalize:'words'}
                        autoCorrect={false}
                        autoFocus={this.props.autoFocus}
                        onSubmitEditing={this.props.onSubmitEditing}
                        enablesReturnKeyAutomatically={true}
                        onChangeText={(value)=>this.setState({value2:value})}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        returnKeyType='next'
                        // tintColor={colors.secundary}
                        // placeholder={placeholder}
                        label="Materiais: R$"
                        fontSize={20}
                        suffix=',00'
                        // error={error}
                        // characterRestriction={characterRestriction ? characterRestriction:999}
                    />
                    <TouchableOpacity
                        style={[styles.button]}
                        color='#dbaa00'
                        onPress={() => this.props.navigation.navigate('Cash', {value: this.getValue()})}>
                        <Text style={styles.buttonTxt}>COBRAR</Text>

                    </TouchableOpacity>
                </View>

            </FormAreaView>
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
        height: 70,
        width: Dimensions.get('window').width-30,
        marginBottom: 10,
        marginTop: 30,
        marginRight: 10,
        marginLeft:-5,
        borderRadius: 8,
        fontSize: 20,
        backgroundColor:'#dbaa00',
        color: 'white',
        elevation: 1,
    },
    buttonTxt: {
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
    }
});
