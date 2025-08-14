import type { Name, NamedAPIResource } from '../common-types.type';

export interface PalParkAreas {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

interface PokemonEncounter {
  base_score: number;
  pokemon_species: NamedAPIResource;
  rate: number;
}
