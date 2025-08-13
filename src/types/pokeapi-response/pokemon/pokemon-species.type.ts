import type { APIResource } from '../common-types.type';

export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: References;
  egg_groups: References[];
  evolution_chain: APIResource;
  evolves_from_species: References | null;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescription[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: References;
  growth_rate: References;
  habitat: References | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: References;
  varieties: Variety[];
}

interface References {
  name: string;
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: References;
  version: References;
}

interface FormDescription {
  description: string;
  language: References;
}

interface Genus {
  genus: string;
  language: References;
}

interface Name {
  language: References;
  name: string;
}

interface PalParkEncounter {
  area: References;
  base_score: number;
  rate: number;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: References;
}

interface Variety {
  is_default: boolean;
  pokemon: References;
}
