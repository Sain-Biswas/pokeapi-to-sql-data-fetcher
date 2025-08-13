import type { NamedAPIResource } from '../common-types.type';

export interface LocationAreas {
  encounter_method_rates: EncounterMethodRate[];
  game_index: number;
  id: number;
  location: NamedAPIResource;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

interface EncounterMethodRate {
  encounter_method: NamedAPIResource;
  version_details: EncounterMethodRateVersionDetail[];
}

interface EncounterMethodRateVersionDetail {
  rate: number;
  version: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}

interface PokemonEncounter {
  pokemon: NamedAPIResource;
  version_details: PokemonEncounterVersionDetail[];
}

interface PokemonEncounterVersionDetail {
  encounter_details: EncounterDetail[];
  max_chance: number;
  version: NamedAPIResource;
}

interface EncounterDetail {
  chance: number;
  condition_values: NamedAPIResource[];
  max_level: number;
  method: NamedAPIResource;
  min_level: number;
}
