import React, { useState, useEffect } from "react";
import "./loginFunction.js"
import "./login.css"

const LoginSignUp = () => {
    return (
        <div className="outerlogin-container d-flex align-item-center justify-content-center">
            <div className="container-1" id="container-1">
                <div className="form-container-1 sign-up-container-1">
                    <form className="signIn-form-tag" action="#">
                        <h1 className="signIn-h1-tag">Create Account</h1>
                        <div className="social-container-1">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <span className="signIn-span-tag">or use your email for registration</span>
                        <input className="signIn-input-tag" type="text" placeholder="Name" />
                        <input className="signIn-input-tag" type="email" placeholder="Email" />
                        <input className="signIn-input-tag" type="password" placeholder="Password" />
                        <button className="signIn-button-tag">Sign Up</button>
                    </form>
                </div>
                <div className="form-container-1 sign-in-container-1">
                    <form className="signIn-form-tag" action="#">
                        <h1 className="signIn-h1-tag">Sign in</h1>
                        <div className="social-container-1">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <span className="signIn-span-tag">or use your account</span>
                        <input className="signIn-input-tag" type="email" placeholder="Email" />
                        <input className="signIn-input-tag" type="password" placeholder="Password" />
                        <a className="signIn-a-tag" href="#">Forgot your password?</a>
                        <button className="signIn-button-tag">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container-1">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="signIn-h1-tag">Welcome Back!</h1>
                            <p className="signIn-p-tag">To keep connected with us please login with your personal info</p>
                            <button className="ghost signIn-button-tag" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="signIn-h1-tag">Hello, Friend!</h1>
                            <p className="signIn-p-tag">Enter your personal details and start journey with us</p>
                            <button className="ghost signIn-button-tag" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;