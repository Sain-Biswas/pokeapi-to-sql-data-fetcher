export interface Pokedexes {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: Reference | null;
  version_groups: Reference[];
}

interface Description {
  description: string;
  language: Reference;
}

interface Reference {
  name: string;
  url: string;
}

interface Name {
  language: Reference;
  name: string;
}

interface PokemonEntry {
  entry_number: number;
  pokemon_species: Reference;
}
