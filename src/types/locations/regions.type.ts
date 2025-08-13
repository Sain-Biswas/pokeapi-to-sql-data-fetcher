export interface Regions {
  id: number;
  locations: Reference[];
  main_generation: Reference | null;
  name: string;
  names: Name[];
  pokedexes: Reference[];
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
