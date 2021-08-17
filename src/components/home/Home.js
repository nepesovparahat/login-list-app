import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import image from "../../assets/images/bg.jpg";
import "./Home.scss";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function requestProducts() {
    await axios
      .get("https://api.ziyuno.com/api/package/packages/en")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    requestProducts();
  }, []);

  console.log(products);
  return (
    <div className="home">
      <img
        src={image}
        alt="img-bg"
        width="100%"
        height="300"
        className="home__img"
      />
      <Header />
      <div className="row mx-0 mt-5">
        <div className="col-2 p-0">
          <button className="home__user-btn">Home</button>
          <button className="home__user-btn">Users</button>
          <button className="home__user-btn">Packets</button>
          <button className="home__user-btn">Logout</button>
        </div>

        <div className="col">
          <div className="row">
            <div className="col text-center home__product">Name</div>
            <div className="col text-center home__product">Price</div>
            <div className="col-3 text-center home__product">Process</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
