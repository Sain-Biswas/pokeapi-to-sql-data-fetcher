import type { NamedAPIResource } from '../common-types.type';

export interface Characteristic {
  descriptions: Description[];
  gene_modulo: number;
  highest_stat: NamedAPIResource;
  id: number;
  possible_values: number[];
}

interface Description {
  description: string;
  language: NamedAPIResource;
}
