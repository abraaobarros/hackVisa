import Axios from "axios";
import {AsyncStorage} from "react-native";

export default class RestClient {

    async get(url, params = {}) {
        //TODO adicionar uma funcao handler e retornar data.data
        let token = await AsyncStorage.getItem('token')
        return await Axios.get(url,{params:params, headers: {'Authorization': token}});
    }

    async post(url, data) {
        let token = await AsyncStorage.getItem('token')
        return await Axios.post(url, data, {headers: {'Authorization': token}});
    }

}
