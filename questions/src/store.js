import { createStore, combineReducers } from 'redux';
import { homeReducer } from './Home/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    homeReducer,
});
const store = createStore(reducers, composeWithDevTools());

export default store;