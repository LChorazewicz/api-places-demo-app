export default class AppConfigProvider {
    getApiUrl(){
        return process.env.REACT_APP_API_URL;
    }

    getAppWidgetToken(){
        return process.env.REACT_APP_WIDGET_TOKEN;
    }
}