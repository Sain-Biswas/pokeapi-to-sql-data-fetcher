import type { Description, NamedAPIResource } from '../common-types.type';

export interface Pokedexes {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: NamedAPIResource | null;
  version_groups: NamedAPIResource[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}

interface PokemonEntry {
  entry_number: number;
  pokemon_species: NamedAPIResource;
}
