export interface LocationAreas {
  encounter_method_rates: EncounterMethodRate[];
  game_index: number;
  id: number;
  location: Reference;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

interface EncounterMethodRate {
  encounter_method: Reference;
  version_details: EncounterMethodRateVersionDetail[];
}

interface Reference {
  name: string;
  url: string;
}

interface EncounterMethodRateVersionDetail {
  rate: number;
  version: Reference;
}

interface Name {
  language: Reference;
  name: string;
}

interface PokemonEncounter {
  pokemon: Reference;
  version_details: PokemonEncounterVersionDetail[];
}

interface PokemonEncounterVersionDetail {
  encounter_details: EncounterDetail[];
  max_chance: number;
  version: Reference;
}

interface EncounterDetail {
  chance: number;
  condition_values: Reference[];
  max_level: number;
  method: Reference;
  min_level: number;
}
