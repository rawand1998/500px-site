import React, { useContext} from "react";
import ButtonAuth from "../../Component/common/Button/ButtonAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import './style.css'
function Register() {
  const navigate = useNavigate();
  const { authWithGoogle } = useContext(AuthContext);
  const authRegister = () => {
    navigate("/registerform");
  };
  const authRegisterGoogle = (e) => {
    e.preventDefault();
    console.log("goole");
    authWithGoogle();
    navigate("/home");
  };
  const authRegisterFacebook = () => {
    // authWithFaceBook();
  };
  const authRegisterApple = () => {
    // authWithApple();
  };
  return (
    <div className="authenticon">
      <div className="auth_conatiner">
        <form action="" className="form register_form">
          <div className="n_register">
          <span>Join 500px</span>
          <span>
            Discover and share incredible photos, gain global exposure, and get
            paid for your work.
          </span>
          </div>
        

          <div className="btns_auth">
          <ButtonAuth
              handleClick={authRegisterApple}
              title="Login With Apple"
              bgcolor="rgb(34, 34, 34)"
              borderColor="rgb(34, 34, 34)"
              color="rgb(255, 255, 255)"
              d="M16.3086 12.7631C16.281 9.73134 18.7909 8.25595 18.9058 8.18699C17.4845 6.11441 15.281 5.83096 14.507 5.80895C12.6563 5.61468 10.8621 6.91641 9.91896 6.91641C8.95761 6.91641 7.50555 5.82824 5.94191 5.86041C3.92907 5.89164 2.04521 7.05705 1.01217 8.86688C-1.11931 12.5573 0.470572 17.9809 2.51239 20.964C3.53396 22.4247 4.72787 24.0563 6.29009 23.9985C7.81882 23.9351 8.38976 23.0237 10.2351 23.0237C12.0632 23.0237 12.5989 23.9985 14.1928 23.9617C15.8332 23.9351 16.8667 22.4945 17.8525 21.0199C19.033 19.3452 19.5071 17.6961 19.526 17.6116C19.4878 17.5987 16.3398 16.398 16.3086 12.7631Z"
              d2="M13.2981 3.84713C14.1199 2.8186 14.6826 1.41988 14.5264 0C13.3363 0.0527766 11.8479 0.822691 10.9912 1.82911C10.2333 2.71521 9.55574 4.16821 9.73072 5.53381C11.0674 5.63306 12.44 4.85948 13.2981 3.84713Z"
            />
               <ButtonAuth
              handleClick={authRegisterFacebook}
              title="Login With Facebook"
              bgcolor="rgb(60, 90, 150)"
              borderColor="rgb(60, 90, 150)"
              color="rgb(255, 255, 255)"
              d="M24 12.0733C24 5.40541 18.6274 3.46502e-06 12 3.46502e-06C5.37258 3.46502e-06 0 5.40541 0 12.0733C0 18.0995 4.38823 23.0943 10.125 24V15.5633H7.07813V12.0733H10.125V9.41343C10.125 6.38755 11.9165 4.71615 14.6576 4.71615C15.9705 4.71615 17.3438 4.95196 17.3438 4.95196V7.92313H15.8306C14.3399 7.92313 13.875 8.85379 13.875 9.80857V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0995 24 12.0733Z"
            />
        
        
        <ButtonAuth
              title="Login With Google"
              bgcolor="#fff"
              borderColor="1px solid  rgb(109, 115, 120)"
              color="rgb(109, 115, 120)"
              handleClick={authRegisterGoogle}
              d="M24 12.2724C24 11.4216 23.9216 10.6044 23.7771 9.81836H12.2449V14.46H18.8351C18.6987 15.1942 18.4118 15.8937 17.9917 16.5162C17.5716 17.1386 17.0271 17.6712 16.391 18.0816V21.0936H20.3486C22.6641 19.0032 24 15.9276 24 12.2736V12.2724Z"
              d2="M12.2449 23.9999C15.551 23.9999 18.3233 22.9259 20.3486 21.0923L16.391 18.0815C15.2951 18.8015 13.8931 19.2275 12.2449 19.2275C9.0551 19.2275 6.3551 17.1155 5.39388 14.2799H1.30286V17.3879C2.32164 19.376 3.88454 21.0473 5.81685 22.2149C7.74917 23.3826 9.97477 24.0006 12.2449 23.9999Z"
              d3="M5.39388 14.2801C5.14898 13.5601 5.00939 12.7921 5.00939 12.0001C5.00939 11.2081 5.14898 10.4401 5.39388 9.72006V6.61206H1.30286C0.445732 8.28391 -0.000440122 10.1291 3.25781e-07 12.0001C3.25781e-07 13.9369 0.472653 15.7681 1.30286 17.3881L5.39265 14.2801H5.39388Z"
              d4="M12.2449 4.7724C14.0424 4.7724 15.6563 5.3784 16.9261 6.5676L20.438 3.126C18.3171 1.188 15.5449 0 12.2449 0C7.45714 0 3.31837 2.688 1.30286 6.612L5.39265 9.72C6.35755 6.8832 9.05632 4.7724 12.2449 4.7724Z"
             fill="rgb(66, 133, 244)"
             fill2="rgb(52, 168, 83)"
             fill3="rgb(251, 188, 5)"
             fill4="rgb(234, 67, 53)"
          />   
           <ButtonAuth
          title="Continue With Gmail"
          bgcolor="rgb(8, 112, 209)"
          borderColor="rgb(8, 112, 209)"
          color="rgb(255, 255, 255)"
          handleClick={authRegister}
          d="M24 2.9C24 2.8 24 2.8 24 2.9C24 2.8 24 2.7 23.9 2.6C23.9 2.5 23.8 2.4 23.8 2.4C23.8 2.4 23.8 2.4 23.7 2.3C23.6 2.3 23.6 2.2 23.5 2.2H23.4C23.4 2 23.3 2 23.2 2H0.8C0.7 2 0.6 2 0.5 2.1H0.4C0.3 2.1 0.3 2.2 0.2 2.2C0.2 2.2 0.2 2.2 0.1 2.3C0.2 2.3 0.1 2.4 0.1 2.5C0 2.6 0 2.7 0 2.8V21.1C0 21.2 0 21.3 0.1 21.4C0.2 21.6 0.3 21.8 0.6 21.9C0.6 22 0.7 22 0.8 22H23.1C23.2 22 23.3 22 23.4 21.9C23.6 21.8 23.8 21.6 23.9 21.4C23.9 21.3 24 21.2 24 21.1V2.9ZM9.8 13.2L11.4 14.9C11.6 15.1 11.8 15.2 12 15.2C12.2 15.2 12.4 15.1 12.6 14.9L14.2 13.2L21.1 20.3H2.9L9.8 13.2ZM1.7 19.1V4.9L8.6 12L1.7 19.1ZM15.4 12L22.3 4.9V19L15.4 12ZM21.1 3.7L13.6 11.4L12 13.1L10.4 11.4L2.9 3.7H21.1Z"
        />
        
          </div>
          <div className="sign_up_para_register">
            <div className="checkbox">
              <input type="checkbox" className="check_register_input" />
              <span> I agree to the<a href="/">Terms of Service</a> and <a href="/">Privacy Policy.</a></span>
            </div>
            <span>
              Already have an account? ?
              <Link to="/login" className="auths_link">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
