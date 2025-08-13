import type { NamedAPIResource } from '../common-types.type';

export interface PalParkAreas {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}

interface PokemonEncounter {
  base_score: number;
  pokemon_species: NamedAPIResource;
  rate: number;
}
