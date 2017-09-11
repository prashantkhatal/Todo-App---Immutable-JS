import React from 'react';

import { TodoListContainer } from '../containers/TodoListContainer';
import { AddTodo } from '../containers/AddTodo';
import { VisibilityContainer } from '../containers/VisibilityContainer';
import { OtherComponent } from './OtherComponents';
import Config from '../configs';

export function TodosApp( props ) {
    return (
        <div>
            <AddTodo />
            <TodoListContainer apiUrl={Config.apiUrl} params={props.params}/>
            <VisibilityContainer/>
            <hr/>
            {/*<OtherComponent />*/}
        </div>
    );
}