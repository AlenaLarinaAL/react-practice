import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Section from "../Section/Section";
import { PokemonForm } from "../PokemonForm/PokemonForm";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

export class App extends Component {
  state = { pokemonName: "" };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <>
        <ToastContainer autoClose={3000} />
        <Section title="App">
          <PokemonForm onSubmit={this.handleFormSubmit} />
        </Section>
        <Section>
          <PokemonInfo pokemonName={this.state.pokemonName} />
        </Section>
      </>
    );
  }
}
