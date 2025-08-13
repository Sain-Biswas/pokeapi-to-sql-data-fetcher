import type { Description, NamedAPIResource } from '../common-types.type';

export interface MoveLearnMethods {
  descriptions: Description[];
  id: number;
  name: string;
  names: Name[];
  version_groups: NamedAPIResource[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
