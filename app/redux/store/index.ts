import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {authReducer} from '../reducers/authReducer'
import {systemReducer} from '../reducers/systemReducer'

const rootReducer = combineReducers({
    authReducer,
    systemReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

