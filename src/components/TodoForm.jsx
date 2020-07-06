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
                    <br />
                    <div className="form-buttons">
                        <button className='btn-clear' onClick={props.clearCompleted}>Clear<p className='subtext'>completed tasks</p></button>
                        <button className='btn-add'>Add</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default TodoForm;