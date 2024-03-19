import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const getAllProducts = () => {
    axios
      .get(apiURL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} />
              <p>${product.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
