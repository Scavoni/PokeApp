import { getRandomPokemon } from "../../services/api";
import { useEffect, useState } from "react";

export const Card = () => {
  const [pokemon, setPokemon] = useState({});
  const [imgPokemon, setImgPokemon] = useState("");
  const baseUrlOficialImageDB =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

  useEffect(() => {
    async function fetchPokemon() {
      const pokemon = await getRandomPokemon();
      console.log(pokemon);
      setPokemon(pokemon.data);
      setImgPokemon(baseUrlOficialImageDB + pokemon.data.id + ".png");
    }
    fetchPokemon();
  }, []);

  return (
    <div>
      {/* {imgPokemon ? (
        <img src={imgPokemon} style={{ height: 100 }} alt="" />
      ) : (
        <img src={pokemon.sprites.front_default} alt="" />
      )} */}
      {/* <img src={pokemon.sprites.front_default} alt="" /> */}
      <img src={imgPokemon} style={{ height: 100 }} alt="" />

      <h1> {pokemon.name}</h1>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        {pokemon && pokemon.types
          ? pokemon?.types.map((type) => {
              return <div key={type.type.url}>{type.type.name}</div>;
            })
          : ""}
      </div>
      <h3>Teste</h3>
    </div>
  );
};
