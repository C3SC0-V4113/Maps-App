import { createContext } from "react";

export interface PlacesContextProps {
  /** Properties */
  isLoading: boolean;
  userLocation?: [number, number];

  /** Methods */
  searchPlacesByTerm: (query: string) => Promise<never[] | undefined>;
}

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
);
