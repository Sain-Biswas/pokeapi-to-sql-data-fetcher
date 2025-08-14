import type { Name, NamedAPIResource } from '../common-types.type';

export interface MoveAilment {
  id: number;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
}
