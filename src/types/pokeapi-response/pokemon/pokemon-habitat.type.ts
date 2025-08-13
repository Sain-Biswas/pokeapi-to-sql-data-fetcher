export interface PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: References[];
}

interface Name {
  language: References;
  name: string;
}

interface References {
  name: string;
  url: string;
}
