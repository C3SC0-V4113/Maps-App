import { PlacesContext } from "./PlacesContext";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  return (
    <PlacesContext.Provider value={INITIAL_STATE}>
      {children}
    </PlacesContext.Provider>
  );
};
