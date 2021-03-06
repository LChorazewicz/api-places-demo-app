export default class AccountConfigProvider {

    getApiUrl() {
        return process.env.REACT_APP_API_URL;
    };

    getApiToken() {
        return localStorage.getItem('token');
    }
    getXAppId(){
        return process.env.REACT_APP_APP_ID
    }
}