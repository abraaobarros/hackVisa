import { AsyncStorage } from 'react-native';
import AuthService from './api/AuthService';

export default class Auth {

    static async login(username, password) {
        if (username === null || password === null){
            return false;
        }
        else{
            await AsyncStorage.multiSet([
                ['username', username],
                ['password', password]
            ]);
            try {
                const response = await (new AuthService()).getAuthenticatedUserData();
                console.log(response)
                const userData = response.data.data.user;
                await AsyncStorage.setItem('loggedUser', JSON.stringify(userData));
                return true;
            } catch (e) {
                if (e.response && (e.response.status == 403 || e.response.status == 422))
                    this.logout();
                throw e;
            }
        }

    }

    static async logout() {
        await AsyncStorage.multiRemove(['username', 'password', 'loggedUser', 'token', 'game']);
    }

    static async user() {
        const data = await AsyncStorage.getItem('loggedUser');
        return JSON.parse(data);
    }

    static async check() {
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        const loggedUser = await AsyncStorage.getItem('loggedUser');

        try {
            this.login(username, password);
        } catch (e) {
            if (e.response && e.response.status == 403)
                return false;
        }

        return username != null && password != null && loggedUser != null;
    }

}
