export interface Type {
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: References;
  id: number;
  move_damage_class: References | null;
  moves: References[];
  name: string;
  names: Name[];
  past_damage_relations: PastDamageRelation[];
  pokemon: Pokemon[];
  sprites: Sprites;
}

interface DamageRelations {
  double_damage_from: References[];
  double_damage_to: References[];
  half_damage_from: References[];
  half_damage_to: References[];
  no_damage_from: References[];
  no_damage_to: References[];
}

interface References {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  generation: References;
}

interface Name {
  language: References;
  name: string;
}

interface PastDamageRelation {
  damage_relations: DamageRelations;
  generation: References;
}

interface Pokemon {
  pokemon: References;
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
