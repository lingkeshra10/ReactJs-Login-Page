import React, { useState } from "react";
import UsernamePage from "./components/UsernamePage/UsernamePage";
import PasswordPage from "./components/PasswordPage/PasswordPage";

function Auth() {
  let [authMode, setAuthMode] = useState("username");
  let [username, setUsername] = useState("");

  const handleUsernameSubmit = (value) => {
    setUsername(value);
    setAuthMode("password");
  };

  if (authMode === "username") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" >
          <UsernamePage onSubmit={handleUsernameSubmit}/>
        </form>
      </div>
    );
  }else if (authMode === "password") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <PasswordPage username={username} />
          <PasswordPage onSubmit={handleUsernameSubmit}/>
        </form>
      </div>
    );
  }
}

export default Auth;