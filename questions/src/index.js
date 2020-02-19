import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-table';
import '@fortawesome/fontawesome-free/js/all';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
