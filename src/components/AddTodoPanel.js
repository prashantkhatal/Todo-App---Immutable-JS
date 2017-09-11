import React from 'react';

export class AddTodoPanel extends React.Component {

    addTodoFunction( text ) {
        text && this.props.addTodoFunction( text );
    }

    render() {
        return (
            <div>
                <i className="goal"></i>
                <input ref={( input ) => this.inputElement = input}
                       type="text"
                       placeholder="Type a Goal and Press Enter...."
                       onKeyPress={( e ) => {
                    if( e.charCode == 13 ) {
                        this.addTodoFunction( e.target.value );
                        e.target.value = '';
                    }
                }}/>

                <a href="#" className="button add_todo_btn" onClick={( e ) => {
                    this.addTodoFunction( this.inputElement.value );
                    this.inputElement.value = '';
                }}>Add Goal</a>
                <i className="search"></i>
                <input
                    type="text"
                    placeholder="Search Here...."
                    onChange={
                        (e) => this.props.searchTodo(e.target.value)
                    }
                />

            </div>
        );
    }
}