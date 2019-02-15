import RestClient from './RestClient';
import {AsyncStorage, Platform} from 'react-native';
import {
FIND_DRIVER_URL, FIND_RIDER_URL, FINISH_MATCH_URL,

} from "../../../redux/URLs";

class TestsService {

    constructor() {
        this.client = new RestClient();
    }

    async findDrivers() {
        return await this.client.post(FIND_DRIVER_URL, {})
    }

    async findRiders() {
        return await this.client.post(FIND_RIDER_URL, {})
    }

    async finishMatchs() {
        return await this.client.post(FINISH_MATCH_URL, {})
    }


}
export default new TestsService()
