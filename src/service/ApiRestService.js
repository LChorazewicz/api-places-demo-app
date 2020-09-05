import axios from "axios";

export default class ApiRestService {
    constructor(config) {
        let headers = {
            'Content-Type': 'application/json',
            'X-App-Id': config.getXAppId()
        };

        if(typeof config.getApiToken() !== "undefined" && config.getApiToken()){
            headers['Authorization'] = `${config.getApiToken()}`;
        }

        this.http = axios.create({
            baseURL: config.getApiUrl(),
            timeout: 60000,
            headers: headers
        });
    }

    getInstance() {
        return this.http;
    }
}