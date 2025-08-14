import type { Name, NamedAPIResource } from '../common-types.type';

export interface EncounterConditionValues {
  condition: NamedAPIResource;
  id: number;
  name: string;
  names: Name[];
}
