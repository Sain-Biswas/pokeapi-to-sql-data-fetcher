import type { GenerationGameIndex, Name, NamedAPIResource } from '../common-types.type';

export interface Type {
  damage_relations: DamageRelations;
  game_indices: GenerationGameIndex[];
  generation: NamedAPIResource;
  id: number;
  move_damage_class: NamedAPIResource | null;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
  past_damage_relations: PastDamageRelation[];
  pokemon: Pokemon[];
  sprites: Sprites;
}

interface DamageRelations {
  double_damage_from: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  no_damage_to: NamedAPIResource[];
}

interface PastDamageRelation {
  damage_relations: DamageRelations;
  generation: NamedAPIResource;
}

interface Pokemon {
  pokemon: NamedAPIResource;
  slot: number;
}

interface Sprites {
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-ix': GenerationIx;
  'generation-v': GenerationV;
  'generation-vi': Record<string, Colosseum>;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

interface GenerationIii {
  'colosseum': Colosseum;
  'emerald': Colosseum;
  'firered-leafgreen': Colosseum;
  'ruby-saphire': Colosseum;
  'xd': Colosseum;
}

interface Colosseum {
  name_icon: null | string;
}

interface GenerationIv {
  'diamond-pearl': Colosseum;
  'heartgold-soulsilver': Colosseum;
  'platinum': Colosseum;
}

interface GenerationIx {
  'scarlet-violet': Colosseum;
}

interface GenerationV {
  'black-2-white-2': Colosseum;
  'black-white': Colosseum;
}

interface GenerationVii {
  'lets-go-pikachu-lets-go-eevee': Colosseum;
  'sun-moon': Colosseum;
  'ultra-sun-ultra-moon': Colosseum;
}

interface GenerationViii {
  'brilliant-diamond-and-shining-pearl': Colosseum;
  'legends-arceus': Colosseum;
  'sword-shield': Colosseum;
}
