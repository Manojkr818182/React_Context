import axios from "axios";


export const get_details = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      return response;
    });
};

export const get_detail = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/7')
    .then((response) => {
      return response;
    });
};

export const login = async (username, password) => {
  return axios.post("http://ec2-15-160-230-139.eu-south-1.compute.amazonaws.com/api/login", {
    email: "parth.iglobsyn@gmail.com",
    login_type: "normal",
    device_type: "android",
    device_token: "kdfjIdsfjdfmdsoifmdslk;fmdsmdsoimc",
    password: "123456789"
  }).then((response) => {
    console.log(response)
    if (response.data.success === true) {
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));
    }
    return response.data;
  });
};