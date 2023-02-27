import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

let user = sessionStorage.getItem('currentUser')
  ? JSON.parse(sessionStorage.getItem('currentUser'))
  : "";
let token = sessionStorage.getItem("token")
  ? JSON.parse(sessionStorage.getItem("token"))
  : "";


var initialState = {
  userDetails: "" || user,
  token: "" || token,
};

export const ContextProvider = props => {
  const [state, setState] = useState(initialState);

  const login = async (username, password) => {
    return axios.post("http://ec2-15-160-230-139.eu-south-1.compute.amazonaws.com/api/login", {
      email: "parth.iglobsyn@gmail.com",
      login_type: "normal",
      device_type: "android",
      device_token: "kdfjIdsfjdfmdsoifmdslk;fmdsmdsoimc",
      password: "123456789"
    }).then((response) => {
      if (response.data.code === "1") {
        setState({
          userDetails: response.data.data,
          token: response.data.data.token
        })
        sessionStorage.setItem("currentUser", JSON.stringify(response.data.data));
        sessionStorage.setItem("token", JSON.stringify(response.data.data.server_token));
      }
      return response.data;
    });
  };


  const logout = async () => {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("token");

    setState({
      userDetails: "",
      token: "",
    });

  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

