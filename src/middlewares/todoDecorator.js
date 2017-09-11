import {ADD_TODO, IMPORT_TODOS} from '../actions';

export const todoDecorator = store => next => action => {

    switch(action.type){
        case ADD_TODO:
            action.text = '- ' + action.text;
            break;
        case IMPORT_TODOS:
            action.todos = action.todos.map( todo => { return {...todo, text:'- ' + todo.text} } );
    }

    return next(action);
}