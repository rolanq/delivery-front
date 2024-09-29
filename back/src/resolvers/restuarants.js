const { Restuarant } = require("../../db/models");

const restuarantsResolvers = {
  getRestaurants: async (args) => {
    const restuarants = await Restuarant.findAll();

    return restuarants;
  },
};

module.exports = { restuarantsResolvers };
