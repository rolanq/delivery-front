const bcrypt = require("bcryptjs");
const { User } = require("../../db/models");

const userResolvers = {
  getUser: async (args) => {
    console.log(args);
  },
  registerUser: async (args) => {
    try {
      const { name, phone, password, email, address } = args;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        phone,
        password: hashedPassword,
        email,
        address,
      });

      return newUser;
    } catch (error) {
      return error.message;
    }
  },
};

module.exports = { userResolvers };
