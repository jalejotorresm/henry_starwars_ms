const characters = require("./characters.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8005/Character");
    return results.data;
  },

  create: async () => {
    throw Error("Hay un error al momento de crear el personaje");
  },
};
