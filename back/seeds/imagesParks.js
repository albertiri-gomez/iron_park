require("dotenv").config();
const Park = require("../models/Park");
const axios = require("axios");
const mongoose = require("mongoose");

const getImagesPark = async () => {
  await mongoose.connect(process.env.DBURLHEROKU, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // get all the parks from the data base
  const parks = await Park.find({ image: { $exists: false } });

  // console.log("esto son los parques", parks);
  // get image from the Google API and save it in the park document
  let parkCount = 0;
  for (park of parks) {
    try {
      const response = await axios({
        url: "https://www.googleapis.com/customsearch/v1/",
        params: {
          key: process.env.DBKEY_GOOGLE,
          cx: process.env.DBKEY_CX,
          q: `${park.name} ${park.address.locality}`,
          searchType: "image",
          fileType: "jpg",
          cr: true,
          alt: "json",
        },
      });
      console.log("esto es response", response.data.items[0].link);
      Object.assign(park, { image: response.data.items[0].link });
      // park.image = response.data.items[0].link;
      // console.log("esto es image", image);
      await park.save();
      console.log(
        `${park.name} image added (${++parkCount} of ${parks.length})`
      );
    } catch (error) {
      console.log(
        error
        // error.response.statusText,
        // `${park.name} (${++parkCount} of ${parks.length})`
      );
      break;
    }
  }
  await mongoose.disconnect();
};

getImagesPark();
