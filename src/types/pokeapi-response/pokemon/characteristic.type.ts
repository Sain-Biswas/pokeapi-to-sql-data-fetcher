import type { Description, NamedAPIResource } from '../common-types.type';

export interface Characteristic {
  descriptions: Description[];
  gene_modulo: number;
  highest_stat: NamedAPIResource;
  id: number;
  possible_values: number[];
}
