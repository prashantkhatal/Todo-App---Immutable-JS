import { SEARCH_TODO } from '../actions';
export default function searchTodoRD( state = '', action ) {
    switch( action.type ) {
        case SEARCH_TODO:
            return action.searchText;

        default:
            return state;
    }
}