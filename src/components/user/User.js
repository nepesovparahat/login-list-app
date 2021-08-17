import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import image from "../../assets/images/bg.jpg";
import "./User.scss";
import getProduct from "../../services/productService";
import { Link } from "react-router-dom";

const User = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function requestProduct() {
    let res = await getProduct();
    setProducts(res.data.result);
    if (res.data.result) setLoading(true);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  console.log(products);
  return (
    <div className="user">
      <img
        src={image}
        alt="img-bg"
        width="100%"
        height="300"
        className="user__img"
      />
      <Header />
      <div className="row mx-0 mt-5">
        <div className="col-2 p-0">
          <Link to="#" className="user__link-active">
            <button className="user__link">Home</button>
          </Link>
          <Link to="#" className="user__link-active">
            <button className="user__link">Users</button>
          </Link>
          <Link to="#" className="user__link-active">
            <button className="user__link">Packets</button>
          </Link>
          <Link to="/" className="user__link-active">
            <button className="user__link">Logout</button>
          </Link>
        </div>
        <div className="col">
          <div className="row">
            <div className="col text-center user__product">Name</div>
            <div className="col text-center user__product">Price</div>
            <div className="col-3 text-center user__product user__product--process">
              Process
            </div>
          </div>
          {!loading ? (
            <div
              className="spinner-grow user__spinner"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            products.map((item, index) => (
              <div className="row" key={index}>
                <div className="col text-center user__product user__product--active">
                  {item.name}
                </div>
                <div className="col text-center user__product user__product--active">
                  {item.price}
                </div>
                <div className="col-3 text-center user__product user__product--delete">
                  <button className="btn user__delete-btn">Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
