import { useContext } from "react";
import { PlacesContext } from "../context";

const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);

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
        <li key={place.id} className="list-group-item list-group-item-action">
          <h6>{place.text_es}</h6>
          <p className="text-muted" style={{ fontSize: 12 }}>
            {place.place_name}
          </p>
          <button className="btn btn-outline-primary btn-sm">
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;