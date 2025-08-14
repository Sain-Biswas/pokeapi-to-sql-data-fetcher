import type { NamedAPIResource } from '../common-types.type';

export interface Berry {
  firmness: NamedAPIResource;
  flavors: BerryFlavorMap[];
  growth_time: number;
  id: number;
  item: NamedAPIResource;
  max_harvest: number;
  name: string;
  natural_gift_power: number;
  natural_gift_type: NamedAPIResource;
  size: number;
  smoothness: number;
  soil_dryness: number;
}

interface BerryFlavorMap {
  flavor: NamedAPIResource;
  potency: number;
}
