import type { Description, Name, NamedAPIResource } from '../common-types.type';

export interface MoveLearnMethods {
  descriptions: Description[];
  id: number;
  name: string;
  names: Name[];
  version_groups: NamedAPIResource[];
}
