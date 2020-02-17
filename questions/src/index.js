import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-table';
import '@fortawesome/fontawesome-free/js/all';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
