const { withDbConnection, dropIfExists } = require("../lib/withDbConnection");
const Park = require("../models/Park");
const axios = require("axios");

const getPark = async () => {
  let parks;

  // get information from the parks API
  try {
    const response = await axios({
      method: "get",
      url:
        "https://datos.madrid.es/egob/catalogo/200761-0-parques-jardines.json",
    });
    parks = response.data["@graph"];
    parks = parks.filter((e) => e.location);
    parks = parks.map((park) => ({
      name: park.title,
      address: {
        locality: park.address.locality,
        postalCode: park.address["postal-code"],
        streetAddress: park.address["street-address"],
      },
      location: {
        latitude: park.location.latitude,
        longitude: park.location.longitude,
      },
      description: park.organization["organization-desc"],
    }));
  } catch (error) {
    console.log(error);
  }

  // create the parks in the data base
  try {
    await withDbConnection(async () => {
      await dropIfExists(Park);
      const newParks = await Park.create(parks);
      console.log(`${newParks.length} parks created`);
    });
  } catch (error) {
    console.log(error);
  }
};

getPark();
