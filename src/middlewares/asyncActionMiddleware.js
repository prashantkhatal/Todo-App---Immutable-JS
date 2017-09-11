/*
 * action === function
 * means need to execute action as fn
 * action(dispatch);
 *  In short THUNK implementation
 */


export const asyncActionMiddleware = store => next => action => {
    typeof action === 'function' ? action( store.dispatch ) : next( action )
}