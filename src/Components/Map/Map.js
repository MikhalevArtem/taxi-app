import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Warning, RouteSelection, RepeatOrder } from "../";
import { wayClear } from "../../redux/modules/way";
import { drawRoute } from "./drawRouter";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVtaWsyNTAyIiwiYSI6ImNraGx5eDY1aDAwcHgyemwxNDV4aWI1aHgifQ.JWHwErqZRXsw5mHRTyF6tg";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 30.3248;
  const lat = 59.9351;
  const zoom = 12;

  const card = useSelector((state) => state.card.card);
  const way = useSelector((state) => state.way.way);
  const dispatch = useDispatch();

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
    });

    const language = new MapboxLanguage();
    map.current.addControl(language);
    return () => {
      map.current.remove();
      dispatch(wayClear());
    };
  }, []);

  if (map.current !== null) {
    drawRoute(map.current, way);
  }

  return (
    <div className="map-page">
      <Nav />

      <div ref={mapContainer} className="map-container">
        {card ? way.length ? <RepeatOrder /> : <RouteSelection /> : <Warning />}
      </div>
    </div>
  );
};

export { Map };
