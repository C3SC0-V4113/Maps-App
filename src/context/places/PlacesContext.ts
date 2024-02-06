import { createContext } from "react";
import { Feature } from "../../interfaces/places";

export interface PlacesContextProps {
  /** Properties */
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];

  /** Methods */
  searchPlacesByTerm: (query: string) => Promise<Feature[]>;
}

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
);
