import React, { useState } from "react";
import { Input, Button } from "components";
import { toast } from "react-toastify";

import {
  Container,
  LeftBox,
  RightBox,
  Title,
  Form,
  ForgotText,
  Div,
  Logo,
} from "./styles";
import { useNavigate } from "react-router-dom";
import logobank from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }
    toast.success("Login efetuado com sucesso", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
    navigate("/home");
  };
  return (
    <Container>
      <LeftBox />
      <RightBox>
        <Form>
          <Title>Money controller</Title>
          <Logo>
            <img src={logobank} alt="" />
          </Logo>
          <Div>
            <Input
              width="100%"
              label="E-mail"
              placeholder="Type your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              width="100%"
              label="Password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              password
              type="password"
            />
          </Div>

          <Button onClick={handleLogin} disabled={!email || !password}>
            Enter
          </Button>
          <ForgotText onClick={() => navigate("/signup")}>
            Create a new account
          </ForgotText>
        </Form>
      </RightBox>
    </Container>
  );
};

export default Login;
