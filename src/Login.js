import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://graffica.info/wp-content/uploads/2019/01/2019-01_BrandRefresh_Old-to-New-Final-1.gif"
          alt=""
        />
        <h1>Ingresa a una copia de slack :D</h1>
        <p>Slack de pueba</p>
        <Button onClick={signIn}>Ingresa con google</Button>
      </div>
    </div>
  );
};

export default Login;
