import { SET_VISIBILITY_FILTER } from '../actions';

export default function visibilityRD( state = 'SHOW_ALL', action ) {
    switch( action.type ) {
        case SET_VISIBILITY_FILTER:
            return action.visibility;

        default:
            return state;
    }
}