import { ADD_TODO, TOGGLE_TODO, DELETE_TODOS, IMPORT_TODOS, SEARCH_TODO} from '../actions';
import {fromJS, Map} from 'immutable';

let idCounter = 0;

export default function todoRD( state, action ) {

    switch( action.type ) {

        case ADD_TODO:
            state = state.push( Map({ id: idCounter++, text: action.text, completed: false }) );
            break;

        case TOGGLE_TODO:
            state = state.map( todo => {
                if( todo.get('id') == action.id ) {
	                todo = todo.set('completed', !todo.get('completed'));
                }
                return todo;
            } );
            break;

        case DELETE_TODOS:
            state = state.filter((todo) => -1 == action.ids.indexOf(todo.get('id')) );
            break;

        case IMPORT_TODOS:
            state = fromJS(action.todos).map( (todo, index)=> todo.set('id', idCounter++))
            break;

        default:
            return state;
    }
    return state;
}