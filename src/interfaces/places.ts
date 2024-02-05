export interface PlacesResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text_es: string;
  place_name_es: string;
  text: string;
  place_name: string;
  center: number[];
  geometry: Geometry;
  context: Context[];
  language_es?: Language;
  language?: Language;
  matching_text?: string;
  matching_place_name?: string;
}

export interface Context {
  id: string;
  mapbox_id: string;
  text_es: string;
  text: string;
  wikidata?: Wikidata;
  language_es?: Language;
  language?: Language;
  short_code?: ShortCode;
}

export enum Language {
  Es = "es",
}

export enum ShortCode {
  Sv = "sv",
  SvSs = "SV-SS",
}

export enum Wikidata {
  Q1543219 = "Q1543219",
  Q3110 = "Q3110",
  Q792 = "Q792",
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  foursquare: string;
  landmark: boolean;
  address?: string;
  category: string;
  wikidata?: string;
}
