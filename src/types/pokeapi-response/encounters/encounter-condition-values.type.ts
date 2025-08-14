import type { Name, NamedAPIResource } from '../common-types.type';

export interface EncounterConditionValue {
  condition: NamedAPIResource;
  id: number;
  name: string;
  names: Name[];
}
