import React from 'react';

class TodoForm extends React.Component {

    render() {

        const { props } = this;

        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="add-todo" className="hidden">Add Todo</label>
                    <input
                        type='text'
                        id='add-todo'
                        value={props.inputValue}
                        onChange={props.handleChange}
                    />
                    <button>Add</button>
                    <button onClick={props.clearCompleted}>Clear Completed</button>
                </form>
            </div>
        );
    }

}

export default TodoForm;