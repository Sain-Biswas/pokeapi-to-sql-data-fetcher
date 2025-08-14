export interface APIResource {
  url: string;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Description {
  description: string;
  language: NamedAPIResource;
}
export interface Effect {
  effect: string;
  language: NamedAPIResource;
}

export interface VersionEncounterDetail {
  encounter_details: Encounter[];
  max_chance: number;
  version: NamedAPIResource;
}

export interface Encounter {
  chance: number;
  condition_values: NamedAPIResource[];
  max_level: number;
  method: NamedAPIResource;
  min_level: number;
}

export interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
}

export interface FlavorTextVersionGroup {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface VersionGroupFlavorText {
  text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface FlavorTextVersion {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedAPIResource;
}
