const { userResolvers } = require("./user");
const { restuarantsResolvers } = require("./restuarants");

const rootResolvers = {
  ...userResolvers,
  ...restuarantsResolvers
};

module.exports = { rootResolvers };
