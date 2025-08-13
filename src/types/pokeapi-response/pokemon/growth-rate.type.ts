import type { Description, NamedAPIResource } from '../common-types.type';

export interface GrowthRate {
  descriptions: Description[];
  formula: string;
  id: number;
  levels: Level[];
  name: string;
  pokemon_species: NamedAPIResource[];
}

interface Level {
  experience: number;
  level: number;
}
