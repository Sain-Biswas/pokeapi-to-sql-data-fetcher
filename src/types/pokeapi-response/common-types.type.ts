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
