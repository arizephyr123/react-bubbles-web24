import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <div>
          <label>
            Username: <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="pass" />
          </label>
        </div>
      </form>
    </>
  );
};

export default Login;
