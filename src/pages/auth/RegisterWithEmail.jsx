import React, { useState } from "react";
import ButtonAuth from "../../Component/common/Button/ButtonAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import './style.css'
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
            // let email = res.user.email;
            // let result = email.split("@")[0];
            // setIfLogin(true);
            // setUserId(res.user.uid);
            // setUserName(result);
            // db.collection("user").add({
            //   user_id: res.user.uid,
            //   name: result,
            // });
          })
          .catch((err) => {
            console.log("err: ", err);
            setErrMsg("Email already exists !");
          });
        navigate("/login");
      }
      // if (email === "" && password === "") {
      //   setErrMsg("password and email is requird");
      // } else if (email !== emailFormat) {
      //   setErrMsg(" format eoor");
      // } else if (password.length < 4) {
      //   setErrMsg("password weak");
      // } else {
      //   setErrMsg("");
      // }
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
            title="Register"
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
