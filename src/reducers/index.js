import { combineReducers } from 'redux';

import todoRD from './todos';
import visibilityRD from './visibilityFilter';
import searchTodoRD from './searchTodo';

export const reducers = combineReducers( { todos: todoRD, visibility: visibilityRD, searchText: searchTodoRD } );