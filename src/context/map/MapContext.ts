import { Map } from "mapbox-gl";
import { createContext } from "react";

export interface MapContextProps {
  /** Properties */
  isMapReady: boolean;
  map?: Map;

  /** Methods */
  setMap: (map: Map) => void;
  getRouteBeteenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);
