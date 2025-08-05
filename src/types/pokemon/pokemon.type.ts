export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: References[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_types: PastType[];
  species: References;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  ability: References | null;
  is_hidden: boolean;
  slot: number;
}

interface References {
  name: string;
  url: string;
}

interface Cries {
  latest: string;
  legacy: null | string;
}

interface GameIndex {
  game_index: number;
  version: References;
}

interface HeldItem {
  item: References;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: References;
}

interface Move {
  move: References;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: References;
  order: number | null;
  version_group: References;
}

interface PastAbility {
  abilities: Ability[];
  generation: References;
}

interface PastType {
  generation: References;
  types: Type[];
}

interface Type {
  slot: number;
  type: References;
}

interface GenerationV {
  'black-white': Sprites;
}

interface GenerationIv {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  'platinum': Sprites;
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
  'showdown': Sprites;
}

interface Sprites {
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
  animated?: Sprites;
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

interface Stat {
  base_stat: number;
  effort: number;
  stat: References;
}
