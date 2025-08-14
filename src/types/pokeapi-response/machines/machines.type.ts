import type { NamedAPIResource } from '../common-types.type';

export interface Machine {
  id: number;
  item: NamedAPIResource;
  move: NamedAPIResource;
  version_group: NamedAPIResource;
}
