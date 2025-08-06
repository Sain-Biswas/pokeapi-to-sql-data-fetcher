export interface Berry {
  firmness: Reference;
  flavors: Flavor[];
  growth_time: number;
  id: number;
  item: Reference;
  max_harvest: number;
  name: string;
  natural_gift_power: number;
  natural_gift_type: Reference;
  size: number;
  smoothness: number;
  soil_dryness: number;
}

interface Reference {
  name: string;
  url: string;
}

interface Flavor {
  flavor: Reference;
  potency: number;
}
