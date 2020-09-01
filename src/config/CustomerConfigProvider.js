export default class CustomerConfigProvider {

    widgetToken;
    apiToken;

    constructor(widgetToken, apiToken) {
        this.widgetToken = widgetToken;
        this.apiToken = apiToken;
    }

    getCustomerApiUrl(){
        return process.env.REACT_APP_API_URL;
    }

    getCustomerApiToken(){
        return this.apiToken;
    }

    getCustomerWidgetToken(){
        return this.widgetToken;
    }
}