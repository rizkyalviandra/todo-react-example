import React, { Component } from "react";

import Todos from "./components/Todos";
import AddTodo from "./components/AddForm";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    todos: []
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="todo-app container">
          <h1 className="center blue-text"> Your todo activity</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
