import type { NamedAPIResource } from '../common-types.type';

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: PokemonCries;
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: PokemonAbilityPast[];
  past_types: PokemonTypePast[];
  species: NamedAPIResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

interface PokemonAbility {
  ability: NamedAPIResource | null;
  is_hidden: boolean;
  slot: number;
}

interface PokemonCries {
  latest: string;
  legacy: null | string;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonHeldItemVersion {
  rarity: number;
  version: NamedAPIResource;
}

interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  order: number | null;
  version_group: NamedAPIResource;
}

interface PokemonAbilityPast {
  abilities: PokemonAbility[];
  generation: NamedAPIResource;
}

interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface PokemonSprites {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  other?: Other;
  versions?: Versions;
  animated?: PokemonSprites;
}

interface GenerationI {
  'red-blue': RedBlue;
  'yellow': RedBlue;
}

interface RedBlue {
  back_default: null | string;
  back_gray: null | string;
  back_transparent: null | string;
  front_default: null | string;
  front_gray: null | string;
  front_transparent: null | string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Sprites5;
  silver: Sprites5;
}

interface Crystal {
  back_default: null | string;
  back_shiny: null | string;
  back_shiny_transparent: null | string;
  back_transparent: null | string;
  front_default: null | string;
  front_shiny: null | string;
  front_shiny_transparent: null | string;
  front_transparent: null | string;
}

interface Sprites5 {
  back_default: null | string;
  back_shiny: null | string;
  front_default: null | string;
  front_shiny: null | string;
  front_transparent?: null | string;
}

interface GenerationIii {
  'emerald': OfficialArtwork;
  'firered-leafgreen': Sprites5;
  'ruby-sapphire': Sprites5;
}

interface OfficialArtwork {
  front_default: null | string;
  front_shiny: null | string;
}

interface Home {
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
}

interface GenerationVii {
  'icons': DreamWorld;
  'ultra-sun-ultra-moon': Home;
}

interface DreamWorld {
  front_default: null | string;
  front_female: null | string;
}

interface GenerationViii {
  icons: DreamWorld;
}

interface GenerationV {
  'black-white': PokemonSprites;
}

interface GenerationIv {
  'diamond-pearl': PokemonSprites;
  'heartgold-soulsilver': PokemonSprites;
  'platinum': PokemonSprites;
}

interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': Record<string, Home>;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

interface Other {
  'dream_world': DreamWorld;
  'home': Home;
  'official-artwork': OfficialArtwork;
  'showdown': PokemonSprites;
}
