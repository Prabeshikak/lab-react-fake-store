import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "axios";

import { Routes, Route } from "react-router-dom";

function App() {
  const [state, setState] = useState([]);

  useEffect(
    () => async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setState(response.data);
    },
    []
  );
  return (
    <div className="App relative z-20 pt-20">
      <h1>fakeStore</h1>
      {state.map((ele) => {
        return (
          <>
            <li>{ele.id}</li>
            <li>{ele.title}</li>
            <li>{ele.name}</li>
            <img src={ele.image} />
          </>
        );
      })}
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
