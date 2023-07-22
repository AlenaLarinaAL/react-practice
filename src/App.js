import React, { Component } from 'react';
import shortid from 'shortid';
import Container from 'components/Container/Container';
import Modal from 'components/Modal/Modal';

import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/TodoFilter/TodoFilter';
import Tabs from 'components/Tabs/Tabs';
import tabs from './components/Tabs/tabs.json';

// import Clock from './components/Clock/Clock';

// import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(5),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = event => {
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

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();

    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <button type="button" onClick={this.toggleModal}>
          show modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>This is modals content</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem
              perferendis illo, magnam eligendi delectus aut inventore repellat
              iste culpa nulla fugit doloremque odit quos ex. Autem tempora sint
              velit? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nostrum facere fugiat ipsum commodi temporibus quaerat accusamus
              modi quasi.
            </p>
            <button type="button" onClick={this.toggleModal}>
              close modal
            </button>
          </Modal>
        )}

        <Tabs tabs={tabs}></Tabs>

        {/* <div>
          <p>Summary notes: {totalTodoCount}</p>
          <p>Completed notes: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
      </Container>
    );
  }
}

export default App;
