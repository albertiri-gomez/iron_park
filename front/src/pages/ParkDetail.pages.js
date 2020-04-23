import React, { useEffect, useState } from "react";
import { getParkID } from "../../lib/park.api";
import { LoadScript } from "@react-google-maps/api";
import { MapView } from "../components/Maps";
import { Token } from "../../token/token_key";
import {
  Formulario,
  Titulo,
  ButtonForm,
} from "../components/Formularios/Formulario";
import { Comments } from "../components/Comments";

export const ParkDetail = (props) => {
  console.log(props);
  const [park, setPark] = useState();
  //   const [one, setOne]
  const parques = () => {
    getParkID(props.idPark).then((park) => setPark(park[0]));
  };
  useEffect(() => {
    parques();
  }, []);

  console.log(park);
  if (!park) {
    return <div>cargando</div>;
  } else {
    return (
      <>
        <LoadScript id="map-google-load" googleMapsApiKey={Token()}>
          <div>
            {/* <p>Las fastansticas frases de "{frases[0]?.ta.nombre}"</p> */}
            <ul>
              <div>
                <div className="photo-center">
                  <li className="photo-center">
                    <img src={park?.image} className="photo-img-park"></img>
                  </li>
                </div>
                <li>
                  <b>Descripción del parque: </b>
                  {park?.description}
                </li>
                <li>
                  <b>Dirección: </b>
                  {park.address.locality}, {park.address.postalCode},{" "}
                  {park.address.streetAddress}
                </li>
                <Titulo className="park-text-center color-meetings">
                  {" "}
                  Listado de comentarios
                </Titulo>
                {park?.comments.map((contentInfo, index) => (
                  <div key={index}>
                    <li>
                      {contentInfo.author} : {contentInfo.content}
                    </li>
                  </div>
                ))}
              </div>

              {/* <li key={park.name}>{park.description} </li> */}
            </ul>
          </div>
          <MapView value={park?.location}></MapView>

          <Comments park={park?._id} setPark={setPark}></Comments>
        </LoadScript>
      </>
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
