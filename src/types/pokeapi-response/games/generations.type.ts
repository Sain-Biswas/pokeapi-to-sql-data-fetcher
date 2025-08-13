export interface Generations {
  abilities: Reference[];
  id: number;
  main_region: Reference;
  moves: Reference[];
  name: string;
  names: Name[];
  pokemon_species: Reference[];
  types: Reference[];
  version_groups: Reference[];
}

interface Reference {
  name: string;
  url: string;
}

interface Name {
  language: Reference;
  name: string;
}
