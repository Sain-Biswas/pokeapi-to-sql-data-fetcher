export interface PokemonShape {
  awesome_names: AwesomeName[];
  id: number;
  name: string;
  names: Name[];
  pokemon_species: References[];
}

interface AwesomeName {
  awesome_name: string;
  language: References;
}

interface References {
  name: string;
  url: string;
}

interface Name {
  language: References;
  name: string;
}
