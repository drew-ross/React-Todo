import React from 'react';

class Todo extends React.Component {

    render() {
        const { task, id, completed } = this.props.todo;
        return (
            <div
                className='todo'
                onClick={null}
            >
                <p>{task}</p>
            </div>
        );
    }
}

export default Todo;