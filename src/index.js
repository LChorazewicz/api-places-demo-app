import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ConfigProvider from "./ConfigProvider";
import ApiRestService from "./Service/ApiRestService";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const config = new ConfigProvider(),
    http = new ApiRestService(config)

ReactDOM.render(
    <React.StrictMode>
        <App
            apiRestService={http}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
