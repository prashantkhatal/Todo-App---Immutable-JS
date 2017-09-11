import { ADD_TODO, TOGGLE_TODO, DELETE_TODOS, IMPORT_TODOS, SEARCH_TODO} from '../actions';

let idCounter = 0;

export default function todoRD( state = [], action ) {
    switch( action.type ) {

        case ADD_TODO:
            state = [ ...state, { id: idCounter++, text: action.text, completed: false } ];
            break;

        case TOGGLE_TODO:
            state = state.map( function( todo ) {
                if( todo.id == action.id ) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            } );
            break;

        case DELETE_TODOS:
            state = state.filter((todo) => -1 == action.ids.indexOf(todo.id) );
            break;

        case IMPORT_TODOS:
            state = [ ...state, ...action.todos.map( todo => {
                return { ...todo, id: idCounter++ }
            } ) ];
            break;

        default:
            return [...state];
    }
    return state;
}