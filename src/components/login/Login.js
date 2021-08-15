import React from "react";
import avatar from "../../assets/images/avatar.svg";
import "./Login.scss";

const Login = () => {
  return (
    <div class="d-flex justify-content-center login">
      <div class="col-md-3">
        <div class="login-form login__box-rounded bg-light m4-2 p-4 shadow-lg">
          <div class="d-flex justify-content-center pb-4">
            <img
              src={avatar}
              alt="avatar-logo"
              class="img-fluid img-thumbnail"
            />
          </div>
          <form class="row g-3">
            <div class="col-12">
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
                required
                autofocus
              />
              <div class="invalid-feedback">Email is invalid</div>
            </div>
            <div class="col-12">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                required
                autofocus
              />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe">
                  Remember me
                </label>
              </div>
            </div>
            <div class="d-grid gap-4 col-6 mx-auto">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
