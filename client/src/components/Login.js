import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
const [username, setUsername] = useState("");
const [pass, setPass] = useState("");

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

const handleSubmit = e => {
  e.preventDefault();
  const creds = {
username: username,
password: pass
  };
  axiosWithAuth()
  .post("/api/login", creds)
  .then(res => {
    console.log("login", creds);
    localStorage.setItem("token", res.data.payload);
    props.history.push("/protected")
  })
  .catch(err => {
    console.log(err);
  });
};

const handleUsername = e => {
  setUsername(e.target.value);
};

const handlePass = e => {
  setPass(e.target.value);
};

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username: <input type="text" name="username" 
            onChange={handleUsername}
            value={username}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
            type="text" name="pass" 
            onChange={handlePass}
            value={pass}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
