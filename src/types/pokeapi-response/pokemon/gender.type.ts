import type { NamedAPIResource } from '../common-types.type';

export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpeciesGender[];
  required_for_evolution: NamedAPIResource[];
}

interface PokemonSpeciesGender {
  pokemon_species: NamedAPIResource;
  rate: number;
}
