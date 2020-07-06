import React from 'react';

class TodoForm extends React.Component {

    render() {

        const { props } = this;

        return (
            <div>
                <form>
                    <label for="add-todo" className="hidden">Add Todo</label>
                    <input
                        type='text'
                        id='add-todo'
                        value={props.inputValue}
                        onChange={props.handleChange}
                    />
                </form>
            </div>
        );
    }

}

export default TodoForm;