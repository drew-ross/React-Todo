import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {

        const { props } = this;

        return (
            <div className='TodoList'>
                {props.todoList.map(todo => <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted}/>)}
            </div>
        )
    }

}

export default TodoList;