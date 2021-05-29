import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import appStore from './reducers';
import AppContainer from './containers/AppContainer';

const initialState = {};

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const composeEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
    appStore,
    initialState,
    composeEnhancers,
);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'),
);
