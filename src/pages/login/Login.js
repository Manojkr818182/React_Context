import React, { useContext, useEffect, useState } from "react";
import stylesheet from "./login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import image_logo from '../../assets/mnj.png';

import { AuthContext } from "../../context/context";
import Swal from "sweetalert2";
import Loader1 from "../../components/loader/Loader1";

const Login = () => {
  const [loading1, setLoding1] = useState(true);
  const [loading, setLoding] = useState(false);
  const [errors, setErrors] = useState({});
  const { state: ContextState, login } = useContext(AuthContext);
  const [ptype, setPtype] = useState("password");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const my_onChangeFun = (e) => {
    setErrors({});
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const changePasswordType = (e) => {
    if (ptype === "password") {
      setPtype("text");
    } else {
      setPtype("password");
    }
  };

  const submitFun = (e) => {
    e.preventDefault();
    setLoding(true);
    login(user.email, user.password).then((res) => {
      setLoding(false);
      if (res.code === "1") {
        navigate('/')
        Swal.fire({
          icon: 'success',
          title: 'Login Success !',
          showConfirmButton: false,
          timer: 600
        })
      } else {
        if (res.code === 888) {
          setErrors({ ...errors, invalid: "invalid" });
        } else {
          setErrors({ ...errors, server_error: "server_error" });
        }
      }
    })
  };
  useEffect(() => {
    setTimeout(() => {
      setLoding1(false);
    }, 500)
  }, []);

  return (
    <div>
      {loading1 &&
        <div>
          <Loader1 />
        </div>
      }
      {!loading1 &&
        <div className={stylesheet.login_page}>
          <div className={stylesheet.form}>
            <form className={stylesheet.login_form} onSubmit={submitFun}>
              <div className={stylesheet.my_logo}>
                <img src={image_logo} alt="" />
              </div>
              <input type="email" placeholder="Username/Email"
                name="email"
                value={user.email}
                onChange={my_onChangeFun}
                required
              />
              <input type={ptype} placeholder="Password"
                name="password"
                value={user.password}
                onChange={my_onChangeFun}
                required
              />
              {!loading &&
                <button>Login</button>
              }
              {loading &&
                <button>Processing</button>
              }
              {errors && errors.invalid &&
                <p className={stylesheet.error}>Invalid Login Credentials! </p>
              }
              {errors && errors.server_error &&
                <p className={stylesheet.error}>Server Not Found ! </p>
              }
              <p className={stylesheet.message}>Forgot password? <NavLink to="/forget">Reset password</NavLink></p>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default Login;
