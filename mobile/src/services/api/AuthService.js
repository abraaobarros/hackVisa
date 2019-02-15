import RestClient from './RestClient'

export default class AuthService {

    constructor () {
        this.client = new RestClient();
    }

    async getUserStatus (email) {
        return await this.client.get("users/status", {email});
    }

    async getAuthenticatedUserData() {
        return await this.client.get("auth");
    }

    async updateAuthUser(data) {
        return await this.client.post("auth", data);
    }

}
