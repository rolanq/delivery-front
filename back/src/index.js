const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require('graphql');
const fs = require("fs");
const path = require("path");
const { rootResolvers } = require("./resolvers/root");
const cors = require('cors');

const loadSchemaFile = (filename) => {
  return fs.readFileSync(path.join(__dirname, "graphql", filename), { encoding: "utf-8" });
};

const typeDefs = [
  loadSchemaFile("types.graphql"),
  loadSchemaFile("queries.graphql"),
  loadSchemaFile("mutations.graphql"),
].join("\n");

const schema = buildSchema(typeDefs);

const corsOptions = {
  origin: '*',
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: rootResolvers,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("GraphQL server with Express running on localhost:5000/graphql");
});
