export const drawRoute = (map, coordinates) => {
  if (coordinates.length) {
    map.flyTo({
      center: coordinates[0],
      zoom: 13,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#FFC617",
        "line-width": 8,
      },
    });
  } else if (map.getLayer("route") !== undefined) {
    map.removeLayer("route");
    map.removeSource("route");
  }
};
