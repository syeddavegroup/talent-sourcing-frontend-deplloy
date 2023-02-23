import React from "react";

import AuthPagesWrapper from "../Layout/AuthPagesWrapper";
import RegisterForm from "./AuthForms/RegisterForm";

const Register = () => {
  return (
    <AuthPagesWrapper>
      <RegisterForm />
    </AuthPagesWrapper>
  );
};

export default Register;
