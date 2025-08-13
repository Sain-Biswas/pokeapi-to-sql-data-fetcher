import type { NamedAPIResource } from '../common-types.type';

export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpeciesDetail[];
  required_for_evolution: NamedAPIResource[];
}

interface PokemonSpeciesDetail {
  pokemon_species: NamedAPIResource;
  rate: number;
}
