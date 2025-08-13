import type { NamedAPIResource } from '../common-types.type';

export interface GrowthRate {
  descriptions: Description[];
  formula: string;
  id: number;
  levels: Level[];
  name: string;
  pokemon_species: NamedAPIResource[];
}

interface Description {
  description: string;
  language: NamedAPIResource;
}

interface Level {
  experience: number;
  level: number;
}
