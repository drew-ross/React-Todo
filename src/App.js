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
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    }, this.clearInput);
  };

  clearInput = () => this.setState({ ...this.state, inputValue: '' });

  handleChange = e => {
    this.setState({
      ...this.state,
      inputValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() !== '')
      this.addTodo(this.state.inputValue.trim());
  };

  toggleCompleted = itemId => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(todo => {
        if (todo.id === itemId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Todo</h1>
        <TodoForm
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          todoList={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state