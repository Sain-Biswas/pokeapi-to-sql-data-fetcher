import type { Description, Name, NamedAPIResource } from '../common-types.type';

export interface MoveLearnMethod {
  descriptions: Description[];
  id: number;
  name: string;
  names: Name[];
  version_groups: NamedAPIResource[];
}
