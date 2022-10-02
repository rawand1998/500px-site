import React from "react";
import ButtonAuth from "../common/Button/ButtonAuth";
import "./style.css";
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className="auth">
      <div className="auth_conatiner">
        <form action="" className="form">
          <span>Login to 500px</span>
          <div className="input">
            <label htmlFor="">Email or Username*</label>
            <input />
          </div>
          <div className="input">
            <div className="labels">
              <label>Password*</label>
              <label className="forget_pass">Forgot password?</label>
            </div>
            <input />
          </div>

          <ButtonAuth
            title="Login"
            bgcolor="rgb(8, 112, 209)"
            borderColor="rgb(8, 112, 209)"
            color="rgb(255, 255, 255)"
          />


          <div className="btns_auth">
          <ButtonAuth
            title="Login with apple"
            bgcolor="rgb(34, 34, 34)"
            borderColor="rgb(34, 34, 34)"
            color="rgb(255, 255, 255)"
          />
          <ButtonAuth
            title="Login with facebook"
            bgcolor="rgb(60, 90, 150)"
            borderColor="rgb(60, 90, 150)"
            color="rgb(255, 255, 255)"
          />
          <ButtonAuth
            title="Login with Google"
            bgcolor="#fff"
            borderColor="1px solid  rgb(109, 115, 120)"
            color=" rgb(109, 115, 120)"
            
          />
          </div>
          <div className="sign_up_para">
            <span>Don`t have a account ?<Link>Sign  up</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
