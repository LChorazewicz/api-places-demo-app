export default class ConfigProvider {

    getApiUrl() {
        return process.env.REACT_APP_API_URL;
    };

    getApiToken() {
        return null;
    }
}