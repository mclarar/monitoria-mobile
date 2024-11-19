import { AxiosResponse } from "axios";
import { pokeApi } from "./api";

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  imagem: string;
}


interface responseGetPokemonsProps {
  results: Pokemon[]; // Inclua 'results' com o tipo correto
}
 
export const getPokemons = (
  limite: number,
  offset: number
): Promise<AxiosResponse<responseGetPokemonsProps, any>> => {
  return pokeApi.get(`/pokemon?limit=${limite}&offset=${offset}`);
};
