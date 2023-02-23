import React from "react";

import AuthPagesWrapper from "../Layout/AuthPagesWrapper";

import LoginForm from "./AuthForms/LoginForm";

const Login = () => {
  return (
    <AuthPagesWrapper>
      <LoginForm />
    </AuthPagesWrapper>
  );
};

export default Login;
