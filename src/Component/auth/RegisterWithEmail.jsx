import React, { useContext, useState } from "react";
import ButtonAuth from "../common/Button/ButtonAuth";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
function RegisterWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const authRegister = async (e) => {
    e.preventDefault();
    try {
      if (email !== "" && password !== "") {
        auth.createUserWithEmailAndPassword(email, password).then((res) => {
          const user = res.user;
          navigate('/')
        })
      } if (email === "" && password === "") {
        setErrMsg("password and email is requird");
      } else if (email !== emailFormat) {
        setErrMsg(" format eoor");
      } else if(password.length<4){
        setErrMsg("password weak");
      }else{
        setErrMsg("")
      }
     
    } catch (err) {
      console.log(err);
    }
  };
  const disbleError = ()=>{
    setErrMsg("");
  }

  return (
    <div className="authenticon">
      <div className="auth_conatiner">
        <form action="" className="form">
          <span>Sign up to 500px</span>
          <div className="input">
            <label htmlFor="">Email or Username*</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              className={errMsg ? 'error_input':''}
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
              className={errMsg ? 'error_input':''}
              onKeyUp={disbleError}
            />
          
          </div>
          <span className="error">{errMsg}</span>
          <ButtonAuth
            title="Register"
            bgcolor="rgb(8, 112, 209)"
            borderColor="rgb(8, 112, 209)"
            color="rgb(255, 255, 255)"
            handleClick={authRegister}
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
