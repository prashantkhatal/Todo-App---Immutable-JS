import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import { TodosApp } from '../components';

export class AppRouter extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={TodosApp}>
                    {/*<Route path="*" component={TodosApp}/>*/}
                    <Route path="/(:filter)" component={TodosApp}/>
                </Route>
            </Router>
        );
    }
}