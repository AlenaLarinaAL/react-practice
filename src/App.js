import React, { Component } from "react";
import shortid from "shortid";
import Container from "components/Container/Container";

import TodoList from "./components/TodoList";
// import initialTodos from "./todos.json";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Filter from "./components/TodoFilter/TodoFilter";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    console.log("App componentDidMount");

    const todos = localStorage.getItem("todos");
    const parsedTodods = JSON.parse(todos);

    if (parsedTodods) {
      this.setState({ todos: parsedTodods });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate");

    if (this.state.todos !== prevState.todos) {
      console.log("Field TODOS has update");

      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    console.log("App render");
    const { todos, filter, showModal } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();

    const visibleTodos = this.getVisibleTodos();

    const completedTodos = todos.filter((todo) => todo.completed);
    console.log(completedTodoCount);

    return (
      <Container>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal>
            <h1>Hi, this is Modals content as a children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              inventore earum sunt debitis a, magni recusandae obcaecati quos
              officiis consectetur voluptate suscipit voluptatum dolorem sequi!
              Vitae blanditiis ipsum sequi? Illum?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}

        <div>
          <p>Summary notes: {totalTodoCount}</p>
          <p>Completed notes: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
     
      </Container>
    );
  }
}

export default App;
