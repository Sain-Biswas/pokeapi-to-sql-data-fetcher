import type { Name, NamedAPIResource } from '../common-types.type';

export interface BerryFlavor {
  berries: Berry[];
  contest_type: NamedAPIResource;
  id: number;
  name: string;
  names: Name[];
}

interface Berry {
  berry: NamedAPIResource;
  potency: number;
}
