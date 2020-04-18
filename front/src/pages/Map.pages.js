import React, { useState } from "react";
import { MapView } from "../components/Maps";
import { Token } from "../../token/token_key";
import { LoadScript } from "@react-google-maps/api";

export const MapPages = () => {
  return (
    <>
      <LoadScript id="map-google-load" googleMapsApiKey={Token()}>
        <MapView></MapView>
      </LoadScript>
    </>
  );
};
