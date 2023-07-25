import { Component } from "react";
import { Spinner } from "../Spinner/Spinner";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const currentName = this.props.pokemonName;

    if (prevName !== currentName) {
      this.setState({ isLoading: true, pokemon: null });

      fetch(`https://pokeapi.co/api/v2/pokemon/${currentName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              `App wrong! Thare is no pokemons with name ${currentName}`
            )
          );
        })
        .then((pokemon) => this.setState({ pokemon }))
        .catch((error) => {
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { pokemon, isLoading, error } = this.state;
    const { pokemonName } = this.props;

    return (
      <>
        {isLoading && <Spinner />}
        {error && <h1>{error.message}</h1>}
        {!pokemonName && <p>Enter pokemon name</p>}

        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              width="300"
              alt={pokemon.name}
              src={pokemon.sprites.other["official-artwork"].front_default}
            />
          </div>
        )}
      </>
    );
  }
}
