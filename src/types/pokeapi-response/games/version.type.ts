import type { NamedAPIResource } from '../common-types.type';

export interface Version {
  id: number;
  name: string;
  names: Name[];
  version_group: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
