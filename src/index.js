import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApiConfigProvider from "./ConfigProvider";
import ApiRestService from "./service/ApiRestService";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AccountConfigProvider from "./AccountConfigProvider";
import AppConfigProvider from "./config/AppConfigProvider";
import CustomerConfigProvider from "./config/CustomerConfigProvider";

const apiConfigProvider = new ApiConfigProvider(),
    http = new ApiRestService(apiConfigProvider),
    accountHttp = new ApiRestService(new AccountConfigProvider());

    const appConfigProvider = new AppConfigProvider();
    const customerConfigProvider = new CustomerConfigProvider();

ReactDOM.render(
    <React.StrictMode>
        <App
            appConfigProvider={appConfigProvider}
            apiRestService={http}
            apiAccountRestService={accountHttp}
            customerConfigProvider={customerConfigProvider}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
