import React, { useEffect, useState } from "react";
import { ParkPages } from "../pages/Park.pages";
import { getParkID } from "../../lib/park.api";
import { getParksOne } from "../../lib/park.api";
import { LoadScript } from "@react-google-maps/api";
import { MapView } from "../components/Maps";
import { Token } from "../../token_key";

export const ParkDetail = (props) => {
  console.log(props);
  const [park, setPark] = useState();
  //   const [one, setOne]
  const parques = () => {
    getParkID(props.idPark).then((park) => setPark(park));
  };
  useEffect(() => {
    parques();
  }, []);

  console.log(park);
  if (!park) {
    return <div>cargando</div>;
  } else {
    return (
      <LoadScript id="map-google-load" googleMapsApiKey={Token()}>
        <div>
          {/* <p>Las fastansticas frases de "{frases[0]?.ta.nombre}"</p> */}
          <ul>
            {park?.map((parks) => (
              <li>{parks.description}</li>
            ))}
            {/* <li key={park.name}>{park.description} </li> */}
          </ul>
        </div>
        <MapView value={park[0]?.location}></MapView>
      </LoadScript>
    );
  }
};

// const [frases, setFrases] = useState([]);
// useEffect(() => {
//   getFrasesFromTa(props.taID).then((frases) => setFrases(frases));
// }, []);

// // NOTE: You can improve this with "optional chaining"
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// if (frases.length == 0) return <div>Loading...</div>;
