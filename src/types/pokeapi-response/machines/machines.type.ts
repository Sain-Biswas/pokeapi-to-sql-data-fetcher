import type { NamedAPIResource } from '../common-types.type';

export interface Machines {
  id: number;
  item: NamedAPIResource;
  move: NamedAPIResource;
  version_group: NamedAPIResource;
}
