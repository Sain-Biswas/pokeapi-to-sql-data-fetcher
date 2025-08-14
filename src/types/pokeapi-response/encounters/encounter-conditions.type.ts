import type { Name, NamedAPIResource } from '../common-types.type';

export interface EncounterCondition {
  id: number;
  name: string;
  names: Name[];
  values: NamedAPIResource[];
}
