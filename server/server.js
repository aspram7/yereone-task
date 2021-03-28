var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var cors = require("cors");
var data = require("./data");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    products(status: String): [Product]
  }
  type Product {
    id: Int
    img: String
    title: String
    originalPrice: Int
    salePrice: Int
    rating: Int
    new: Boolean
    sale: Boolean
    exist: Boolean
    bestSeller: Boolean
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  products: ({ status }, req) => {
    const res = data
      .filter((product) => {
        return status === "new" ? product.new : status === "best" ? product.bestSeller : true;
      })
      .map((product) => ({
        ...product,
        img: `${req.protocol}://${req.get("host")}/${product.img}`,
      }));
    return res;
  },
};

var app = express();

app.use(cors());
app.use(express.static("images"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
