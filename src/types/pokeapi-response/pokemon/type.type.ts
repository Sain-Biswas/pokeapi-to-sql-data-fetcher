import type { GenerationGameIndex, Name, NamedAPIResource } from '../common-types.type';

export interface Type {
  damage_relations: TypeRelations;
  game_indices: GenerationGameIndex[];
  generation: NamedAPIResource;
  id: number;
  move_damage_class: NamedAPIResource | null;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
  past_damage_relations: TypeRelationsPast[];
  pokemon: TypePokemon[];
  sprites: TypeSprites;
}

interface TypeRelations {
  double_damage_from: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  no_damage_to: NamedAPIResource[];
}

interface TypeRelationsPast {
  damage_relations: TypeRelations;
  generation: NamedAPIResource;
}

interface TypePokemon {
  pokemon: NamedAPIResource;
  slot: number;
}

interface TypeSprites {
  'generation-iii': TypeGenerationIII;
  'generation-iv': TypeGenerationIV;
  'generation-ix': TypeGenerationIX;
  'generation-v': TypeGenerationV;
  'generation-vi': Record<string, TypeColosseum>;
  'generation-vii': TypeGenerationVII;
  'generation-viii': TypeGenerationVIII;
}

interface TypeGenerationIII {
  'colosseum': TypeColosseum;
  'emerald': TypeColosseum;
  'firered-leafgreen': TypeColosseum;
  'ruby-saphire': TypeColosseum;
  'xd': TypeColosseum;
}

interface TypeColosseum {
  name_icon: null | string;
}

interface TypeGenerationIV {
  'diamond-pearl': TypeColosseum;
  'heartgold-soulsilver': TypeColosseum;
  'platinum': TypeColosseum;
}

interface TypeGenerationV {
  'black-2-white-2': TypeColosseum;
  'black-white': TypeColosseum;
}

interface TypeGenerationVII {
  'lets-go-pikachu-lets-go-eevee': TypeColosseum;
  'sun-moon': TypeColosseum;
  'ultra-sun-ultra-moon': TypeColosseum;
}

interface TypeGenerationVIII {
  'brilliant-diamond-and-shining-pearl': TypeColosseum;
  'legends-arceus': TypeColosseum;
  'sword-shield': TypeColosseum;
}

interface TypeGenerationIX {
  'scarlet-violet': TypeColosseum;
}
