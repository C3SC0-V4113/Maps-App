import { ChangeEvent, useRef } from "react";

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      /** TODO: Ejecutar busqueda */
      console.log("debounced value: ", event.target.value);
    }, 1000);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Lugar"
        onChange={onQueryChanged}
      />
    </div>
  );
};
