import { useContext, useEffect, useReducer } from "react";
import { mapReducer } from "./mapReducer";
import { MapContext } from "./MapContext";
import { Map, Marker, Popup } from "mapbox-gl";
import { PlacesContext } from "..";
import { directionsApi } from "../../apis";
import { DirectionsResponse } from "../../interfaces/directions";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  markers: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const { places } = useContext(PlacesContext);

  useEffect(() => {
    state.markers.forEach((marker) => marker.remove());
    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`
          <h6>${place.text_es}</h6>
          <p>${place.place_name_es}</p>
      `);

      const newMarker = new Marker()
        .setPopup(popup)
        .setLngLat([lng, lat])
        .addTo(state.map!);

      newMarkers.push(newMarker);
    }

    /** TODO: Limpiar polylines */
    dispatch({ type: "setMarkers", payload: newMarkers });
  }, [places]);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`
    <h4>Aqui Estoy</h4>
    <p>En algún lugar del mundo</p>
    `);

    new Marker({
      color: "#61DAFB",
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);
    dispatch({ type: "setMap", payload: map });
  };

  const getRouteBeteenPoints = async (
    start: [number, number],
    end: [number, number]
  ) => {
    const resp = await directionsApi.get<DirectionsResponse>(
      `/${start.join(",")};${end.join(",")}`
    );

    const { distance, duration, geometry } = resp.data.routes[0];
    let kms = distance / 1000;
    kms = Math.round(kms * 1000);
    kms /= 100;

    const minutes = Math.floor(duration / 60);

    console.log(kms, minutes);
  };

  return (
    <MapContext.Provider
      value={{
        /** Properties */
        ...state,
        /** Methods */
        setMap,
        getRouteBeteenPoints,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
