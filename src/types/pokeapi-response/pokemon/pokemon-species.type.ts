import type { APIResource, Description, FlavorTextVersion, Name, NamedAPIResource } from '../common-types.type';

export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: NamedAPIResource;
  egg_groups: NamedAPIResource[];
  evolution_chain: APIResource;
  evolves_from_species: NamedAPIResource | null;
  flavor_text_entries: FlavorTextVersion[];
  form_descriptions: Description[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: NamedAPIResource;
  growth_rate: NamedAPIResource;
  habitat: NamedAPIResource | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounterArea[];
  pokedex_numbers: PokemonSpeciesDexEntry[];
  shape: NamedAPIResource;
  varieties: PokemonSpeciesVariety[];
}

interface Genus {
  genus: string;
  language: NamedAPIResource;
}

interface PalParkEncounterArea {
  area: NamedAPIResource;
  base_score: number;
  rate: number;
}

interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: NamedAPIResource;
}

interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedAPIResource;
}
