import type { Name, NamedAPIResource, VersionEncounterDetail } from '../common-types.type';

export interface LocationArea {
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
  version_details: EncounterVersionDetail[];
}

interface EncounterVersionDetail {
  rate: number;
  version: NamedAPIResource;
}

interface PokemonEncounter {
  pokemon: NamedAPIResource;
  version_details: VersionEncounterDetail[];
}
