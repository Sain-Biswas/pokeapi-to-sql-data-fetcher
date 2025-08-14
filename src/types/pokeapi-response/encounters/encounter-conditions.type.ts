import type { Name, NamedAPIResource } from '../common-types.type';

export interface EncounterConditions {
  id: number;
  name: string;
  names: Name[];
  values: NamedAPIResource[];
}
