import React from 'react';
import TodoList from './components/TodoList.jsx';
import TodoForm from './components/TodoForm';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      todoList: [
        {
          task: 'Test Todo',
          id: Date.now(),
          completed: false
        }
      ]
    };
  }

  addTodo = todoName => {
    const newTodo = {
      task: String(todoName),
      id: Date.now(),
      completed: false
    };
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm handleChange={this.handleChange} inputValue={this.state.inputValue}/>
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state