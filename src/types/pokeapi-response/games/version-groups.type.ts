export interface VersionGroups {
  generation: Reference;
  id: number;
  move_learn_methods: Reference[];
  name: string;
  order: number;
  pokedexes: Reference[];
  regions: Reference[];
  versions: Reference[];
}

interface Reference {
  name: string;
  url: string;
}
