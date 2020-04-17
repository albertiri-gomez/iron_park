import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, MarkerClusterer, Marker } from "@react-google-maps/api";
import { getParks } from "../../lib/park.api";

export const MapView = (location) => {
  console.log("esto es location", location);
  const [parks, setParks] = useState([]);
  // console.log(parks);
  useEffect(() => {
    getParks().then((park) => setParks(park));
  }, []);

  //      *** REQUISITOS PARA CENTRAR EL MAPA ***
  const size = {
    height: "100vh",
    width: "100vw",
  };
  const zoom = 7;
  const center = {
    lat: location.value.latitude,
    lng: location.value.longitude,
  };

  console.log("cetr");

  // const data = [{ lat: 40, lng: -3 }];
  if (!parks) {
    <div>loading</div>;
  } else {
    return (
      <GoogleMap
        id="wrapper-google-map"
        mapContainerStyle={size}
        zoom={zoom}
        center={center}
      >
        <>
          <MarkerClusterer>
            {(clusterer) => {
              //console.log("clusterer:", clusterer);

              return parks?.map((park, index) => {
                // console.log("estos son los parques", park);
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: location.value.latitude,
                      lng: location.value.longitude,
                    }}
                  ></Marker>
                );
              });
            }}
          </MarkerClusterer>
        </>
      </GoogleMap>
    );
  }
};
