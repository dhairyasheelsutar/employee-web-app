import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import RegisterReducer from './apps/Users/Register/store/reducers/RegisterReducer';
import loginReducer from './apps/Login/store/reducers/loginReducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    register: RegisterReducer,
    login: loginReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
