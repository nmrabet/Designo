import React, { useEffect, useRef } from "react";
import L from "leaflet";

const style = {
  border: "1px solid red",
  width: "100%",
  height: "300px",
};

function Map({ markersData }) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(() => {
    layerRef.current.clearLayers();
    markersData.forEach((marker) => {
      L.marker(marker.latLng, { title: marker.title }).addTo(layerRef.current);
    });
  }, [markersData]);

  return <div id='map' style={style} />;
}

export default Map;
