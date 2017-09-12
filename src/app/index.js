import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { AppRouter } from '../routers';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from '../reducers';

import thunkMiddleware from 'redux-thunk';      //instead used asyncActionMiddleware
import {todoDecorator} from '../middlewares/todoDecorator';
import {asyncActionMiddleware} from '../middlewares/asyncActionMiddleware';
import Config from '../configs';

import { Provider } from 'react-redux';
import {fromJS} from 'immutable';

const initalState = fromJS({
	todos: [],
	visibility: 'SHOW_ALL',
	searchText: ''
});

const store = createStore( reducers, initalState, compose(applyMiddleware(asyncActionMiddleware, todoDecorator), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) );

render( <Provider store={store}>
            <AppRouter />
        </Provider>,
    document.getElementById( Config.rootElementId )
);

Provider.propTypes = {
    store: PropTypes.object.isRequired
}