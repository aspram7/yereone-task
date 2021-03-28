import axios from "axios";

export const getProducts = async (status) => {
  const { data } = await axios.post("http://localhost:4000/graphql", {
    query: `
      query {
        products(status: "${status}") {
          id
          img
          title
          originalPrice
          salePrice
          rating
          new
          sale
          exist
          bestSeller
        }
      }
    `,
  });

  const { products } = data.data;
  return products;
};
