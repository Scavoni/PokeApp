import axios from "axios";
const baseUrl = "https://pokeapi.co/api/v2/";
const baseUrlOficialImageDB =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

export async function getRandomPokemon() {
  const randomNumber = Math.floor(Math.random() * 998);

  const { data } = await axios(baseUrl + "pokemon/" + randomNumber.toString());

  return { data };
}
