import { useState } from "react";
import { useGetPokemonByNameQuery } from "../../redux/pokemon/pokemon";
import { Spinner } from "../../components/Loader/Loader";

const Home = () => {
  const [pokemonName, setPokemonName] = useState("");

  const { data, error, isFetching, isUninitialized, refetch } =
    useGetPokemonByNameQuery(pokemonName, {
      skip: pokemonName === "",
      // pollingInterval:3000,
      // refetchOnFocus: true,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName"></input>
        <button type="submit">Search</button>
      </form>
      <button onClick={refetch} disabled={isUninitialized}>
        refetch
      </button>

      <div>
        {error ? (
          <div>Oh no, there is no pokemon named {pokemonName} </div>
        ) : isFetching ? (
          <Spinner />
        ) : data && !isFetching ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Home;
