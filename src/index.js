import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import { getCountries } from './actions/actions-countries';

import { Router, Route, hashHistory } from 'react-router';
import Navigation from './presentational/navigation.component';

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Navigation}>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

store.dispatch(getCountries());
