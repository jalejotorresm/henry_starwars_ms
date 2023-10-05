const films = require("./films.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8005/Film");
    return results.data;
  },

  create: async () => {
    throw Error("Hay un error al momento de crear la película");
  },
};
