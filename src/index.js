import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
