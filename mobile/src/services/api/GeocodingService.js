import RestClient from "./RestClient";

export default class GeocodingService {

    constructor () {
        this.client = new RestClient();
    }

    async get(address) {
        return await this.client.get('/rest/geocode', {address});
    }

}
