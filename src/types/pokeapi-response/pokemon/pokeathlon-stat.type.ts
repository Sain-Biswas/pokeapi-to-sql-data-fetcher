import type { Name, NamedAPIResource } from '../common-types.type';

export interface PokeathlonStat {
  affecting_natures: NaturePokeathlonStatAffectSets;
  id: number;
  name: string;
  names: Name[];
}

interface NaturePokeathlonStatAffectSets {
  decrease: NaturePokeathlonStatAffect[];
  increase: NaturePokeathlonStatAffect[];
}

interface NaturePokeathlonStatAffect {
  max_change: number;
  nature: NamedAPIResource;
}
