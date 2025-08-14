import type { Name, NamedAPIResource } from '../common-types.type';

export interface PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}
