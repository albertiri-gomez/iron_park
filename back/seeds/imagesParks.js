require("dotenv").config();
const Park = require("../models/Park");
const axios = require("axios");
const mongoose = require("mongoose");

const getImagesPark = async () => {
  await mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // get all the parks from the data base
  const parks = await Park.find({ image: { $exists: false } });

  // get image from the Google API and save it in the park document
  let parkCount = 0;
  for (park of parks) {
    try {
      const response = await axios({
        url:
          "https://www.googleapis.com/customsearch/v1/AIzaSyAit0JnSQL2OurAVpFdie_QrgMy5wzzEfo",
        params: {
          key: process.env.GOOGLE_KEY,
          cx: process.env.GOOGLE_CX,
          q: `${park.name} ${park.address.locality}`,
          searchType: "image",
          fileType: "jpg",
          cr: true,
          alt: "json",
        },
      });
      park.image = response.data.items[0].link;
      await park.save();
      console.log(
        `${park.name} image added (${++parkCount} of ${parks.length})`
      );
    } catch (error) {
      console.log(
        error.response.status,
        error.response.statusText,
        `${park.name} (${++parkCount} of ${parks.length})`
      );
      break;
    }
  }
  await mongoose.disconnect();
};

getImagesPark();
