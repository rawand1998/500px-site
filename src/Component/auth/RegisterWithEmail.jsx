import React, { useContext, useState } from "react";
import ButtonAuth from "../common/Button/ButtonAuth";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
function RegisterWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { RegisterAuth } = useContext(AuthContext);
  const authRegister = (e) => {
    e.preventDefault();
    RegisterAuth(email, password);
    navigate("/login");
  };
  return (
    <div className="authenticon">
      <div className="auth_conatiner">
        <form action="" className="form">
          <span>Sign up to 500px</span>
          <div className="input">
            <label htmlFor="">Email or Username*</label>
            <input onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <div className="labels">
              <label>Password*</label>
              <label className="forget_pass">Forgot password?</label>
            </div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <ButtonAuth
            title="Register"
            bgcolor="rgb(8, 112, 209)"
            borderColor="rgb(8, 112, 209)"
            color="rgb(255, 255, 255)"
            handleClick={authRegister}
          />

          <div className="sign_up_para">
            <span>
              Don`t have a account ?
              <Link className="auths_link" to="/register">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterWithEmail;
