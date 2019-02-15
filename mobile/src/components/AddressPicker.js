import React from 'react';
import {
    View,
    FlatList,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,
    StyleSheet,
    AsyncStorage,
    Platform
} from "react-native"
import {Geo, AddressService} from '../services';
import ActionSheet from 'react-native-actionsheet';
import axios from "axios";
import {ADDRESSES_URL, GEOCODE_URL, } from "../../redux/URLs";
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderTitle from "./HeaderTitle";
import TextInput from "./TextInput";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {strings} from "../lang/pt";
import colors from "../styles/colors";
import Spinner from "react-native-loading-spinner-overlay";
import _ from "lodash";
import ListItem from "./ListItem";

export default class SelectAddress extends React.Component {

    constructor(props) {
        super(props);
        this.service = new AddressService();
        this.state = {
            search_address: "",
            selected_address: {},
            name: "",
            addresses: [],
            addressesFavorites: [],
            pending: false,
            address_name: false,
            validate: false,
            requesting: false
        }
        this.debounced = _.debounce(this.search, 300)
    }
    componentDidMount(){
        this.loadAddress().done();
    }
    onChangeAddress = async (search_address, validate) => {
        this.setState({search_address})
        this.debounced();
    }


    search = async () => {
        this.setState({pending: true})
        try {
            let {search_address} = this.state;
            let {data: {data}} = await axios.get(GEOCODE_URL, {
                headers: {'Authorization': await AsyncStorage.getItem('token')},
                params: {address: search_address}
            })
            this.setState({addresses: data})
        } catch (e) {
        }
        this.setState({pending: false})
    }


    async onSelectItem(item) {
        this.setState({selected_address: item})
        await this.askForAddressName(item);
    }

    onClickSave = async () => {
        if (this.state.validate) {
            this._nextWithAddress()
            // await this.onSubmit()
        }
    }

    onSubmit = async () => {
        this.setState({requesting: true})
        console.log(this.state.selected_address)
        try {
            let {selected_address, name} = this.state
            let {data: {data}} = await axios.post(ADDRESSES_URL, {
                ...selected_address, name
            }, {headers: {'Authorization': await AsyncStorage.getItem('token')}})
            this.refreshCallback();
            this.props.navigation.goBack();
        } catch (e) {
            console.log(e)
        }
        this.setState({requesting: false})
    }

    async askForAddressName() {
        this.setState({address_name: true})
    }

    renderItem(item) {
        let {address_name} = this.state;
        return address_name ? null : <View>
            <ListItem name={item.name} description={item.address} onPress={() => this.onSelectItem(item)}/>
        </View>

    }

    async _showLoading() {
        await this.setState({pending: true, hasItemSelected: false})
    }

    async _hideLoading() {
        await this.setState({pending: false, hasItemSelected: false})
    }

    _onPressItem(id) {
        if (this.props.navigation.getParam("onRefresh")) {
            this.props.navigation.state.params.onRefresh({
                ...this.props.navigation.state.params,
                ...this.props,
                selected: id,
                [this.props.name]: id
            })
        }
        if (id.name == null) {
            this.setState({selected: id})
            this.showActionSheet()
        } else {
            this.props.navigation.navigate(this.props.nextScene, {
                ...this.props.navigation.state.params,
                ...this.props,
                [this.props.name]: id
            });
        }
    }

    _nextWithAddress() {
        this.props.navigation.navigate(this.props.nextScene, {
            ...this.props.navigation.state.params,
            ...this.props,
            selected: this.state.selected_address,
            [this.props.name + "Name"]: this.state.name,
            [this.props.name]: this.state.selected_address
        });
    }
    onSelectItemFavorites = async (item)=>{
        await this.setState({selected_address:item,name:item.name})
        this._nextWithAddress();
    }
    renderItemAddress(item) {
        return (
            <ListItem
                onPress={() => this.onSelectItemFavorites(item)}
                name={item.name}
                leftIcon={<Icon style={{marginRight: 16, marginLeft:10}} name='map-marker' size={25} color={colors.primary}/>}
                description={item.address}/>
        )
    }

    loadAddress = async () => {
        
        try{
            this.setState({pending: true})
            let token = await AsyncStorage.getItem('token')
            let {data: {data}} = await axios.get(ADDRESSES_URL, {headers: {'Authorization': token}})
            this.setState({addressesFavorites: data, pending: false})
        } catch (e) {
            this.setState({pending: false})
            console.log(e)
        }
    }
    
    render() {
        let pd = {}
        if (Platform.OS === 'ios') {
            pd = {
                behavior: 'padding',
                keyboardVerticalOffset: 64
            }
        }
        let {search_address, addresses,addressesFavorites, pending, name, address_name, requesting} = this.state;
        return (<SafeAreaView style={{
                flex: 1,
                backgroundColor: address_name ? 'rgba(0,0,0,0.6)' : "white",
                flexDirection: 'column',
            }}>
                <View style={{position: 'absolute', padding: 20}}/>
                <View style={{flex: 1, padding: 20}} ref={(img) => {
                    this.backgroundImage = img;
                }}
                >
                    <HeaderTitle
                        title={this.props.title}
                    />
                    <TextInput
                        autoFocus
                        label='Endereço do local'
                        value={search_address}
                        onSubmitEditing={this.search}
                        onChange={this.onChangeAddress}/>
                        
                    {this.state.search_address.length === 0 ? <Text style={styles.empty}>Digite seu endereço completo.</Text>:null}
                    {this.state.search_address.length === 0 ?
                        <FlatList
                            ListHeaderComponent={<Text style={{paddingTop:10}}>Locais favoritos</Text>} 
                            keyboardDismissMode={'on-drag'}   
                            containerStyle={{flex: 1}}
                            data={addressesFavorites}
                            onRefresh={this.loadAddress}
                            refreshing={pending}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => this.renderItemAddress(item)}
                            
                            />
                    :
                        <FlatList
                            data={addresses}
                            containerStyle={{flex: 1}}
                            onRefresh={this.search}
                            ListEmptyComponent={this.state.search_address.length !== 0 ? (
                                <Text style={styles.empty}>Digite seu endereço completo.</Text>) : null}
                            refreshing={pending}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => this.renderItem(item)}
                        />
                    }
                    
                </View>
                {address_name ?
                    <KeyboardAvoidingView
                        {...pd}
                    >
                        <View style={styles.containerAskName}>
                            <TouchableOpacity
                                onPress={() => this.setState({address_name: false})}
                                style={{alignItems: 'flex-end',}}
                            >
                                <MaterialIcon name='close' size={32} color="black"/>
                            </TouchableOpacity>
                            <HeaderTitle title={strings.titles.choose_title_address}/>
                            <TextInput
                                autoFocus
                                label='Ex. Casa, Trabalho'
                                value={name}
                                onSubmitEditing={this.onClickSave}
                                onChange={(name, validate) => this.setState({name, validate})}/>
                            <TouchableOpacity style={{flexDirection: 'row',}}
                                              onPress={this.onClickSave}>
                                <Text style={styles.saveButtonText}>
                                    Salvar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView> : null}
                <Spinner visible={requesting}/>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }, saveButtonText: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        textAlign: 'center',
        padding: 15,
        marginTop: 10,
        backgroundColor: colors.primary,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        elevation: 1,
        fontSize: 22,
        color: '#fff',
    }, containerAskName: {
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'flex-end',
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#ddd',
        shadowColor: '#555',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
    },
    item: {
        backgroundColor: '#eee',
        marginBottom: 2,
        flex: 1,
        width: 300,
        padding: 20
    },
    itemHighlight: {
        backgroundColor: '#d4e9ed',
        marginBottom: 2,
        flex: 1,
        width: 300,
        padding: 20
    },
    notButton: {
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30,
        marginBottom: 100,
    },
    notButtonTxt: {
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
    },
    loginInput: {
        fontSize: 18,
        color: '#6d6e71',
        margin: 14,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    error: {
        color: 'red',
        textAlign: 'left'
    },
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        marginTop: 10,

        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
    },
    notSelectedButton: {
        backgroundColor: '#6d6e71',
        padding: 10,
        marginTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
    },
    buttonTxt: {
        fontSize: 22,
        color: 'white'
    }
});
