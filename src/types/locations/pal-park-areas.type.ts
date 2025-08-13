export interface PalParkAreas {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

interface Name {
  language: Reference;
  name: string;
}

interface Reference {
  name: string;
  url: string;
}

interface PokemonEncounter {
  base_score: number;
  pokemon_species: Reference;
  rate: number;
}
