import React from 'react'
import avatar from "../../assets/images/avatar.svg";
import "./Login.scss";

const Login = () => {
    return (
        <div class="login">
           <div className="login__column">
               <div className="login__avatar">
               <img src={avatar} alt="avatar-logo"/>
               </div>
               <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form action="" method="" class="row g-3">
                        <h4>Welcome Back</h4>
                        <div class="col-12">
                            <label>Username</label>
                            <input type="text" name="username" class="form-control" placeholder="Username"/>
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="rememberMe"/>
                                <label class="form-check-label" for="rememberMe"> Remember me</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark float-end">Login</button>
                        </div>
                    </form>
                    <hr class="mt-4"/>
                    <div class="col-12">
                        <p class="text-center mb-0">Have not account yet? <a href="#">Signup</a></p>
                    </div>
                </div>
            </div>
        </div>
           </div>
        </div>
    )
}

export default Login
