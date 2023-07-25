import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class PokemonForm extends Component {
  state = { pokemonName: "" };

  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === "") {
      toast.warn("Enter valid pokemon name!");
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        ></input>
        <button type="submit">
          <ImSearch />
          Search
        </button>
      </form>
    );
  }
}
