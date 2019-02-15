import Axios from 'axios'
import Storage from './Storage'
import {AsyncStorage} from 'react-native'

const baseUrl = 'http://beta.bynd.com.br/'

export const Auth = {

    async isLogged() {
        const user = await Storage.getItem('username');
        if (user != null) {
            return true;
        }
        return false;
    },

    async logout() {
        await Storage.removeItem('username');
        await Storage.removeItem('password');
        await Storage.removeItem('loggedUser');
    },

    async sighIn(username, password) {
        try {
            await Storage.setItem('username', username);
            await Storage.setItem('password', password);
            return true;
        } catch (e) {
            return false;
        }
    },

    async token() {
        return {
            username: await Storage.getItem('username'),
            password: await Storage.getItem('password')
        }
    }
}

export const Rest = {
    async get(path) {
        return await Axios.get(
            'https://beta.bynd.com.br' + path,
            {headers: {'Authorization': await AsyncStorage.getItem('token')}});
    },
    async post(path, data) {
        console.log(path)
        return await Axios.post(
            'https://beta.bynd.com.br' + path, data,
            {
                headers: {
                    'accept': 'application/json',
                    'accept-language': 'en_US',
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': await AsyncStorage.getItem('token')
                }
            }
        );
    }
}

export const Geo = {
    async fetch(address) {
        return await Rest.get('/rest/geocode?address=' + encodeURIComponent(address));
    }
}

export const Routine = {
    async fetch() {
        return await Rest.get('/api/v2/recurrences');
    },
    async delete(routine) {
        console.log(routine.id);
        return await Rest.post('/api/v2/recurrences/' + routine.id + '/destroy', {});
    }
}
