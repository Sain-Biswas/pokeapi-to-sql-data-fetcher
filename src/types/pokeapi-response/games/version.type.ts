import type { Name, NamedAPIResource } from '../common-types.type';

export interface Version {
  id: number;
  name: string;
  names: Name[];
  version_group: NamedAPIResource;
}
