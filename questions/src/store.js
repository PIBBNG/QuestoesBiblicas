import { applyMiddleware, createStore, combineReducers } from 'redux';
import { homeReducer } from './Home/reducers';
import { questionReducer } from './Question/reducers';
import { reducer } from 'redux-form'
import { createLogger } from 'redux-logger'

const reducers = combineReducers({
    home: homeReducer,
    questions: questionReducer,
    form: reducer,
});

const log = createLogger({
    collapsed: true
})

const store = createStore(reducers,
                          applyMiddleware(log));

export default store;