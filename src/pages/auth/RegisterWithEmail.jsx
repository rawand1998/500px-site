import React, { useState } from "react";
import ButtonAuth from "../../Component/common/Button/ButtonAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./style.css";
function RegisterWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const authRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("try ignup");
      if (email !== "" && password !== "") {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(({ user }) => {
            console.log(user);
          })
          .catch((err) => {
            console.log("err: ", err);
            setErrMsg("Email already exists !");
          });
        navigate("/login");
      }
    } catch (err) {
      console.log("err====");
      console.log(err);
    }
  };

  const disbleError = () => {
    setErrMsg("");
  };

  return (
    <div className="authenticon">
      <div className="auth_conatiner">
        <form onSubmit={authRegister} className="form">
          <span>Sign up to 500px</span>
          <div className="input">
            <label htmlFor="">Email or Username*</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={errMsg ? "error_input" : ""}
              onKeyUp={disbleError}
            />
          </div>
          <span className="error">{errMsg}</span>
          <div className="input">
            <div className="labels">
              <label>Password*</label>
              <label className="forget_pass">Forgot password?</label>
            </div>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={errMsg ? "error_input" : ""}
              onKeyUp={disbleError}
            />
          </div>
          <span className="error">{errMsg}</span>
          <ButtonAuth
            title="REGISTER"
            bgcolor="rgb(8, 112, 209)"
            borderColor="rgb(8, 112, 209)"
            color="rgb(255, 255, 255)"
          />

          <div className="sign_up_para">
            <span>
              Have a account ?
              <Link className="auths_link" to="/login">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterWithEmail;
