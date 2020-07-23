import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApiConfigProvider from "./ConfigProvider";
import ApiRestService from "./service/ApiRestService";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AccountConfigProvider from "./AccountConfigProvider";
import WidgetConfigProvider from "./WidgetConfigProvider";
const apiConfigProvider = new ApiConfigProvider(),
    widgetConfigProvider = new WidgetConfigProvider(),
    http = new ApiRestService(apiConfigProvider),
    accountHttp = new ApiRestService(new AccountConfigProvider());

ReactDOM.render(
    <React.StrictMode>
        <App
            apiRestService={http}
            apiAccountRestService={accountHttp}
            apiConfigProvider={apiConfigProvider}
            widgetConfigProvider={widgetConfigProvider}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
