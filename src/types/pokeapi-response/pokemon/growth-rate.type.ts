import type { Description, NamedAPIResource } from '../common-types.type';

export interface GrowthRate {
  descriptions: Description[];
  formula: string;
  id: number;
  levels: GrowthRateExperienceLevel[];
  name: string;
  pokemon_species: NamedAPIResource[];
}

interface GrowthRateExperienceLevel {
  experience: number;
  level: number;
}
