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
  nature: References;
}

interface References {
  name: string;
  url: string;
}

interface Name {
  language: References;
  name: string;
}
