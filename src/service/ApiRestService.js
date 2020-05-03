import axios from "axios";

export default class ApiRestService {
    constructor(config) {

        this.http = axios.create({
            baseURL: config.getApiUrl(),
            timeout: 60000,
            headers: {
                'Authorization': `Bearer ${config.getApiToken()}`,
                'Content-Type': 'application/json'
            }
        });
    }

    getInstance() {
        return this.http;
    }
}