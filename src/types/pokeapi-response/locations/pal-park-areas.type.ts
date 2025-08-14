import type { Name, NamedAPIResource } from '../common-types.type';

export interface PalParkArea {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PalParkEncounterSpecies[];
}

interface PalParkEncounterSpecies {
  base_score: number;
  pokemon_species: NamedAPIResource;
  rate: number;
}
