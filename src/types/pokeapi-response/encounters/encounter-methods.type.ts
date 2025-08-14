import type { Name } from '../common-types.type';

export interface EncounterMethod {
  id: number;
  name: string;
  names: Name[];
  order: number;
}
