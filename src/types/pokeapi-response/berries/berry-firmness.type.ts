import type { Name, NamedAPIResource } from '../common-types.type';

export interface BerryFirmness {
  berries: NamedAPIResource[];
  id: number;
  name: string;
  names: Name[];
}
