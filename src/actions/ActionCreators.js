import fetch from 'isomorphic-fetch';
import * as actionConstants from './actionConstants';

export const addTodoFunction = ( text ) => ({ type: actionConstants.ADD_TODO, text });
export const toggleTodo = ( id ) => ({ type: actionConstants.TOGGLE_TODO, id });
export const deleteTodos = ( ids ) => ({ type: actionConstants.DELETE_TODOS, ids });
export const searchTodo = ( searchText ) => ({ type: actionConstants.SEARCH_TODO, searchText });
export const switchVisibility = ( visibility ) => ({ type: actionConstants.SET_VISIBILITY_FILTER, visibility });


export const fetchContent = ( url ) => (function( dispatch ) {

    return fetch( url )
        .then( response => response.json() )
        .then( json => {
            dispatch( {
                type: actionConstants.IMPORT_TODOS,
                todos: json
            } );
        } );
});

export const todoActions = {
    addTodoFunction,
    toggleTodo,
    deleteTodos,
    searchTodo,
    fetchContent
}
