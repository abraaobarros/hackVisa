import RestClient from './RestClient';

export default class AddressService {

    constructor() {
        this.client = new RestClient();
    }

    async fetch() {
        return await this.client.get('address');
    }

}
