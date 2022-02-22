import React from "react";
import LoginForm from "../components/forms/LoginForm";
import H1 from "../components/headings/H1";

const Login = () => {
  return (
    <div className="max-w-screen-md ml-auto mr-auto flex flex-col items-center py-10">
      <H1>Welcome back!</H1>
      <LoginForm />
    </div>
  );
};

export default Login;
