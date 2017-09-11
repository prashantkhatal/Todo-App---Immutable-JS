import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { TodoList } from '../components/Todo';
import { VISIBILITY_STATUSES } from '../actions/actionConstants';

import { todoActions } from '../actions/ActionCreators'

function listOutTodos( todos, status, searchText = '' ) {
    let statusFlag = true;
    searchText = searchText.toLowerCase();

    switch( status ) {
        case VISIBILITY_STATUSES.SHOW_ACTIVE:
            statusFlag = false;
            break;
        case VISIBILITY_STATUSES.SHOW_COMPLETED:
        case VISIBILITY_STATUSES.SHOW_ALL:
    }

    return todos.filter( ( todo ) => ( VISIBILITY_STATUSES.SHOW_ALL == status || todo.get('completed') == statusFlag ) && -1 != todo.get('text').toLowerCase().indexOf(searchText) );
}

const mapStatesToMap = function( state, myOwnProps ) {
    return {
        todos: listOutTodos( state.get('todos'), myOwnProps.params.filter || state.get('visibility'), state.get('searchText') )
    }
}

const mapDispatchToProps = function( dispatch ) {

    return {
        ...bindActionCreators( todoActions, dispatch )
    };
}

export const TodoListContainer = connect( mapStatesToMap, mapDispatchToProps )( TodoList );

//Optional to bindActionCreators is below code
/*
 return {
	 toggleTodo: ( id ) => {
		 dispatch( todoActions.toggleTodo( id ) )
	 },
	 deleteTodos: (id) => {
		 dispatch( todoActions.deleteTodos( id ) )
	 },
	 fetchContent: (url) => {
	 	dispatch(todoActions.fetchTodos(url));
	 }
 }
 */