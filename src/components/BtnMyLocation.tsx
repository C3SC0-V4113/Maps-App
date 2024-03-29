import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { isMapReady, map } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) {
      throw new Error("Map is not ready");
    }
    if (!userLocation) {
      throw new Error("There is no user location");
    }

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      onClick={onClick}
      className="btn btn-primary"
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 999 }}
    >
      Mi ubicación
    </button>
  );
};
