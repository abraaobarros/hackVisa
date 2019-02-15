import GeocodingService from "./api/GeocodingService";

export default class Geo {

    static async get(address) {
        return await (new GeocodingService()).get(address);
    }

}