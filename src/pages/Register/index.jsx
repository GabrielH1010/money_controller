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
  const [senha, setSenha] = useState("");
  const [emailConfirme, setEmailConfirme] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email !== emailConfirme) {
      toast.error("O e-mail não são iguais", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      return;
    }

    const response = signup(email, senha);

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
              label="Confirm e-mail"
              placeholder="Type your confirmation e-mail"
              value={emailConfirme}
              onChange={(e) => setEmailConfirme(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              password
              placeholder="Type your password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Div>
          <Button
            onClick={handleSignup}
            disabled={!email || !emailConfirme || !senha}
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
