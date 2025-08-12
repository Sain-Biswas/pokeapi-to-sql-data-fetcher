export interface EvolutionTriggers {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Reference[];
}

interface Name {
  language: Reference;
  name: string;
}

interface Reference {
  name: string;
  url: string;
}
