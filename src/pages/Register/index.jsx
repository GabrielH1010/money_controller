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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("A senha não são iguais", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      return;
    }

    const response = signup(email, password);

    if (response) {
      setError(response);
      return;
    }

    toast.success("Usuário cadatrado com sucesso", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });

    console.log(error);
    navigate("/");
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
              label="E-mail"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              password
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirm password"
              placeholder="Type your password again"
              type="password"
              password
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </Div>
          <Button
            onClick={handleSignup}
            disabled={!email || !passwordConfirm || !password}
          >
            Create
          </Button>
          <ForgotText onClick={() => navigate("/")}>Back to login</ForgotText>
        </Form>
      </RightBox>
    </Container>
  );
};

export default Login;
