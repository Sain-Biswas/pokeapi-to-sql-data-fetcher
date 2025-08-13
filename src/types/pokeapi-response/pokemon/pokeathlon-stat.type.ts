import type { NamedAPIResource } from '../common-types.type';

export interface PokeathlonStat {
  affecting_natures: AffectingNatures;
  id: number;
  name: string;
  names: Name[];
}

interface AffectingNatures {
  decrease: Crease[];
  increase: Crease[];
}

interface Crease {
  max_change: number;
  nature: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
