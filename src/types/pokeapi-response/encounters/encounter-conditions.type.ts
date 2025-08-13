import type { NamedAPIResource } from '../common-types.type';

export interface EncounterConditions {
  id: number;
  name: string;
  names: Name[];
  values: NamedAPIResource[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
