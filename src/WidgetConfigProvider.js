export default class WidgetConfigProvider {

    getWidgetUrl() {
        return process.env.REACT_APP_WIDGET_URL;
    };

    getWidgetToken() {
        return process.env.REACT_APP_WIDGET_TOKEN;
    }
}