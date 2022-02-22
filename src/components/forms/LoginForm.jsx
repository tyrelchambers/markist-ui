import React from "react";
import { Button } from "../Button";
import Input from "../Input";
import InputWrapper from "../InputWrapper";
import Form from "./Form";

const LoginForm = () => {
  return (
    <Form className="mt-10 max-w-lg ml-auto mr-auto gap-6 flex flex-col">
      <InputWrapper htmlFor="email" label="Email">
        <Input placeholder="Email" type="email" name="email" />
      </InputWrapper>

      <InputWrapper htmlFor="password" label="Password">
        <Input placeholder="Password" type="password" name="password" />
      </InputWrapper>

      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
