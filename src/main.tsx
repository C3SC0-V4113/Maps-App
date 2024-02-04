import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
import mapboxgl from "mapbox-gl";

import "./styles.css";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX;

if (!navigator.geolocation) {
  alert("Tu navegador no tiene acceso a la geolocalización");
  throw new Error("Tu navegador no tiene acceso a la geolocalization");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
