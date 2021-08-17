/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import avatar from "../../assets/images/avatar.svg";
import SpinnerButton from "./SpinnerButton";
import "./Login.scss";

const Login = () => {
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    setConnected(true);
    e.preventDefault();
    const { email, password } = inputValues;
    let data = new FormData();
    data.append("mail", email);
    data.append("password", password);
    const headers = {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    let result = await axios
      .post("https://api.ziyuno.com/api/auth/login/en", data, {
        headers: headers,
      })
      .then((res) => res.data.result)
      .catch((error) => {
        console.log(error);
      });
    if (result.user) {
      history.push("/home");
      setConnected(false);
    } else {
      setError("E-mail or password entered does not match, try again!");
      setConnected(false);
    }
  };

  const handleChange = (e) => {
    setInputValues((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="d-flex justify-content-center login">
      <div className="col-md-3">
        <div className="login-form login__box-rounded bg-light m4-2 p-4 shadow-lg">
          <div className="d-flex justify-content-center pb-4">
            <img
              src={avatar}
              alt="avatar-logo"
              className="img-fluid img-thumbnail"
            />
          </div>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-12">
              <input
                type="email"
                name="email"
                className="form-control"
                value={inputValues.email}
                placeholder="Email"
                onChange={handleChange}
                required
                style={{
                  border: error ? "3px solid #d37575" : null,
                }}
              />
              <div className="invalid-feedback">Email is invalid</div>
            </div>
            <div className="col-12">
              <input
                name="password"
                type="password"
                value={inputValues.password}
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                required
                style={{
                  border: error ? "3px solid #d37575" : null,
                }}
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label">Remember me</label>
              </div>
            </div>
            {error && (
              <div className="alert alert-danger p-2" role="alert">
                {error}
              </div>
            )}
            <div className="d-grid gap-4 col-6 mx-auto">
              {connected ? (
                <SpinnerButton />
              ) : (
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
