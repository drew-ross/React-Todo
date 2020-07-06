import React from 'react';

class Todo extends React.Component {

    render() {
        const { task, id, completed } = this.props.todo;
        const { toggleCompleted } = this.props;
        return (
            <div
                className={completed ? 'completed todo' : 'todo'}
                onClick={() => toggleCompleted(id)}
            >
                <p>{task}</p>
            </div>
        );
    }
}

export default Todo;