import React from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'
//defined add and delete function
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: 'this is content 1' },
      { id: 2, content: 'this is content 2' },
      { id: 3, content: 'this is content 3' },
    ]
  }
  //function delete , choose todo to delete
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
