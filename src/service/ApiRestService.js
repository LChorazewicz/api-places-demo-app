import axios from "axios";

export default class ApiRestService {
    constructor(config) {
        let headers = {
            'Content-Type': 'application/json'
        };

        if(config.getApiToken()){
            headers['Authorization'] = `Bearer ${config.getApiToken()}`;
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