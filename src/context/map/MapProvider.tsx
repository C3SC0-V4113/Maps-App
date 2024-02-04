import { useReducer } from "react";
import { mapReducer } from "./mapReducer";
import { MapContext } from "./MapContext";
import { Map } from "mapbox-gl";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider
      value={{
        /** Properties */
        ...state,
        /** Methods */
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};