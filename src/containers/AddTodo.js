import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { AddTodoPanel } from '../components/AddTodoPanel';
import { addTodoFunction, searchTodo } from '../actions/ActionCreators'

const mapDispatchToProps = function( dispatch ) {

    return {
        ...bindActionCreators( { addTodoFunction, searchTodo }, dispatch )
    };
}

export const AddTodo = connect( null, mapDispatchToProps )( AddTodoPanel );