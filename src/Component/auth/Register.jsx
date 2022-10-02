import React from "react";
import ButtonAuth from "../common/Button/ButtonAuth";
import { Link } from "react-router-dom";
import './style.css'
function Register() {
  return (
    <div className="auth">
      <div className="auth_conatiner">
        <form action="" className="form register_form">
          <span>Join 500px</span>
          <span>
            Discover and share incredible photos, gain global exposure, and get
            paid for your work.
          </span>

          <div className="btns_auth">
            <ButtonAuth
              title="Login"
              bgcolor="rgb(8, 112, 209)"
              borderColor="rgb(8, 112, 209)"
              color="rgb(255, 255, 255)"
            />
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
          
          <div className="sign_up_para_register">
            <div className="checkbox">
                <input type="checkbox" />
              <span> I agree to the Terms of Service and Privacy Policy.</span> 
            </div>
            <span>
            Already have an account? ?<Link to="/login" className="auths_link">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
