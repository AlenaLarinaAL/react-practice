import React, { Component } from "react";
import Container from "components/Container/Container";
// import Form from "components/Form";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import initialTodos from "./todos.json";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState((prevState) => ({}));
  };

  // formSubmitHandller = (data) => {
  //   console.log(data);
  // };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    const completedTodos = todos.filter((todo) => todo.completed);
    console.log(completedTodoCount);

    return (
      <Container>
        {/* <Form onSubmit={this.formSubmitHandller}/> */}
        {/* <Counter initialValue={0} /> */}
        {/* <Dropdown /> */}
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Summary notes: {totalTodoCount}</p>
          <p>Completed notes: {completedTodoCount}</p>
        </div>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
