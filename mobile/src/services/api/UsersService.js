import RestClient from './RestClient';
import {AsyncStorage, Platform} from 'react-native';
import {
    CODE_VALIDATE_PASSWORD_ONLY_URL, CREATE_USER_URL,
    FAVOURITES_URL,
    FAVOURITES_URL_ADD,
    FAVOURITES_URL_REMOVE, FORGOT_PASSWORD_URL,
    PROFILE_URL,
    SEARCH_USER_URL, VALID_EMAIL_URL
} from "../../../redux/URLs";

class UsersService {

    constructor() {
        this.client = new RestClient();
    }

    async updateToken(token) {
        return await this.client.post(PROFILE_URL, {fcm_token: token, device: Platform.OS})
    }

    async forgotPassword(email) {
        return await this.client.post(FORGOT_PASSWORD_URL, {email});
    }

    async getUsers(searchQuery) {
        return await this.client.get(SEARCH_USER_URL, {q: searchQuery});
    }

    async getFavourites() {
        return await this.client.get(FAVOURITES_URL);
    }

    async addFavourite(userId) {
        return await this.client.post(FAVOURITES_URL_ADD(userId))
    }

    async removeFavourite(userId) {
        return await this.client.post(FAVOURITES_URL_REMOVE(userId))
    }

    async isValidEmail(email) {
        return (await this.client.get(VALID_EMAIL_URL, {email})).data.data
    }

    async isValidCode(email, code) {
        return (await this.client.post(CODE_VALIDATE_PASSWORD_ONLY_URL, {email, code})).data.data
    }

    async getProfile(){
        return (await this.client.get(PROFILE_URL)).data.data
    }

    async login(token){
        await AsyncStorage.setItem('token', token)
        let profile = await this.getProfile()
        await AsyncStorage.setItem('loggedUser', JSON.stringify(profile))
        return profile
    }


    async getUserDetails(){
        return JSON.parse(await AsyncStorage.getItem('loggedUser')).user
    }

    async createUser(user){
        return await this.client.post(CREATE_USER_URL, {...user})
    }

    async getToken(){
        return await AsyncStorage.getItem('token')
    }
}

export default new UsersService()
