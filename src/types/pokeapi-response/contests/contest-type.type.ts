import type { NamedAPIResource } from '../common-types.type';

export interface ContestType {
  berry_flavor: NamedAPIResource;
  id: number;
  name: string;
  names: ContestName[];
}

interface ContestName {
  color: string;
  language: NamedAPIResource;
  name: string;
}
