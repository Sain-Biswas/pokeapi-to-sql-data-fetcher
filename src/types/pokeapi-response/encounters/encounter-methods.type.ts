import type { Name } from '../common-types.type';

export interface EncounterMethods {
  id: number;
  name: string;
  names: Name[];
  order: number;
}
