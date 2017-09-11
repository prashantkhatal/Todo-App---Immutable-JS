import React from 'react';
import DragSortableList from 'react-drag-sortable';
import PropTypes from 'prop-types';

import {OtherComponent} from './OtherComponents';
import {Modal} from './Modal';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';

export class TodoList extends React.Component{


    constructor(props){
        super(props);
        this.state = { showLoader: true, showModal: false };
    }

    componentDidMount(){
        this.props.fetchContent(this.props.apiUrl);
    }

    componentDidUpdate(prevProps, prevState){
        if( prevState.showLoader ) {
            this.setState( {
                showLoader: false
            } );
        }
    }

    toggleModal = () => {
        this.setState( prevProps => ({showModal: !prevProps.showModal}))
    }

    render() {

        let list = [{'content':<li className='no-drag' style={{textAlign: 'center'}}>No Goals</li>}],
            placeholder = <li className="placeholderContent"> DROP HERE ! </li>;

        if( this.props.todos.size) {
	        list = [];
	        this.props.todos.map( ( todo, index ) => {
		        list.push( { 'content':<Todo key={todo.get('id')} {...todo.toJS()} toggleTodo={this.props.toggleTodo}
                       deleteTodos={this.props.deleteTodos} />});
	        } )
        }

        return (
                <div>
                    <a href="#" className="delete button" onClick={( e ) => {
                        this.toggleModal();
                    }}>Play Game</a>

                    <Modal onCancel={this.toggleModal} show={this.state.showModal}>
                        <OtherComponent />
                    </Modal>

                    <div className="todo-list">
                        <a href="#" className={`delete delete-all button ${( (!this.props.todos.length) ? 'hide' : '')}`}
                           onClick={( e ) => {
                               let ids = [];
                               document.querySelectorAll( 'input[type=checkbox]:checked' ).forEach( function( e, d ) {
                                   ids.push( +e.getAttribute( 'data-id' ) )
                               } );
                               ids.length && this.props.deleteTodos( ids );
                           }}>Delete All</a>

                        <span>Todo List:</span>
                        <a href="#" className="delete delete-all fetch hide button" onClick={( e ) => {
                            this.props.fetchContent();
                        }}>Fetch Content</a>

                        <div className="clearfix"></div>

                        {(this.state.showLoader) ? <div className="loader"></div>: <ul><DragSortableList items={list} placeholder={placeholder}/></ul>}
                    </div>
                </div>
        )
    }
}

function Todo( props ) {
    return (
        <li className={(props.completed) ? 'striked' : ''} onClick={e => props.toggleTodo( props.id )}>
            <i className="sort"></i>
            <input type="checkbox" data-id={props.id} onClick={(e)=> e.stopPropagation()}/>
            {props.text}
            <a href="#" className="delete button" onClick={( e ) => {
                e.stopPropagation();
                props.deleteTodos([props.id]);
            }}>Delete</a>
        </li>
    );
}

const Animator = (props) =>{
    if(props.isCssTransition) {
        return <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={5500}
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={5500}
                    transitionLeaveTimeout={5500}
                    >
                    {props.children}
                </ReactCSSTransitionGroup>
    }else{
        return <ReactTransitionGroup component={GetChild}>
            {props.children}
        </ReactTransitionGroup>
    }
}

// to return child
// Why implemented this?
// Because the ReactTransitionGroup will wrap all into span(by default ) or component="ul or react Component"
// so to avoid it and make children as first child, it's used
const GetChild = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || '';
}

TodoList.propTypes = {
    apiUrl: PropTypes.string.isRequired,
    todos: PropTypes.object,
    toggleTodo: PropTypes.func.isRequired
}

Todo.propTypes = {
    id:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
}