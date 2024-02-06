import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";

const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);
  const { map } = useContext(MapContext);

  const [activeId, setActiveId] = useState("");

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  if (isLoadingPlaces)
    return (
      <div className="alert alert-primary">
        <h6>Searching</h6>
        <p>Please Wait...</p>
      </div>
    );

  if (places.length === 0) return <></>;

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id && "active"
          } `}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.text_es}</h6>
          <p style={{ fontSize: 12 }}>{place.place_name}</p>
          <button
            className={`btn btn-outline-${
              activeId === place.id ? "light" : "primary"
            } btn-sm`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
