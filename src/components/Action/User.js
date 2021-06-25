import axios from "axios";

export function login(e, email, password, history, setAuth, setToken) {
  e.preventDefault();
  var config = {
    method: "post",
    url: "http://localhost:5000/api/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email: email, password: password },
  };

  axios(config)
    .then((res) => {
      setToken(res.data.token);
      setAuth(true);
      history.replace("/");
    })
    .catch(function (error) {
      alert("WRONG!");
    });
}

export const Signup = (
  e,
  email,
  password,
  firstname,
  lastname,
  adress,
  history,
  setAuth,
  setToken
) => {
  e.preventDefault();
  let config = {
    method: "post",
    url: "http://localhost:5000/api/user/signup",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      adress: adress,
    },
  };

  axios(config)
    .then((res) => {
      setToken(res.data.token);
      setAuth(true);
      history.replace("/");
    })
    .catch(function (error) {
      alert("WRONG!");
    });
};

export const getProfile = (token, setProfileData) => {
  var config = {
    method: "get",
    url: "http://localhost:5000/api/user/profile/",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
    },
  };

  axios(config)
    .then((response) => {
      setProfileData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export function updateProfile(
  token,
  email,
  adress,
  lastname,
  password,
  firstname
) {
  let config = {
    method: "put",
    url: "http://localhost:5000/api/user/profile/",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
    },
    data: {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      adress: adress,
    },
  };

  axios(config)
    .then((res) => {
      console.log("Changement effectué");
    })
    .catch((err) => console.log(err));
}
