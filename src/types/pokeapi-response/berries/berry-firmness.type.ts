import type { NamedAPIResource } from '../common-types.type';

export interface BerryFirmness {
  berries: NamedAPIResource[];
  id: number;
  name: string;
  names: Name[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
