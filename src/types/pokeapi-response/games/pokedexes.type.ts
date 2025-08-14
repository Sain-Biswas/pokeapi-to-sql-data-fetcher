import type { Description, Name, NamedAPIResource } from '../common-types.type';

export interface Pokedex {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: NamedAPIResource | null;
  version_groups: NamedAPIResource[];
}

interface PokemonEntry {
  entry_number: number;
  pokemon_species: NamedAPIResource;
}
