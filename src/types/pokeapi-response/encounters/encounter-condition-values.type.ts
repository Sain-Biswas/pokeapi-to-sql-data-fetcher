import type { NamedAPIResource } from '../common-types.type';

export interface EncounterConditionValues {
  condition: NamedAPIResource;
  id: number;
  name: string;
  names: NameElement[];
}

interface NameElement {
  language: NamedAPIResource;
  name: string;
}
