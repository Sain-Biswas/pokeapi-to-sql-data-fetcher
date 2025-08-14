import type { Name, NamedAPIResource } from '../common-types.type';

export interface BerryFlavor {
  berries: FlavorBerryMap[];
  contest_type: NamedAPIResource;
  id: number;
  name: string;
  names: Name[];
}

interface FlavorBerryMap {
  berry: NamedAPIResource;
  potency: number;
}
