import React, { useState } from "react";
import { Input, Button } from "components"
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

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (email !== emailConfirme) {
            toast.error("O e-mail não são iguais", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored",
            })
            return;
        }

        const response = signup(email, senha);

        console.log(response)

        toast.success("Usuário cadatrado com sucesso", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
        })
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
                            label="email"
                            placeholder="Digite seu E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label="Confirmar email"
                            placeholder="Confirme seu E-mail"
                            value={emailConfirme}
                            onChange={(e) => setEmailConfirme(e.target.value)}
                        />
                        <Input
                            label="Password"
                            type="password"
                            password
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </Div>
                    <Button onClick={handleSignup} disabled={!email || !emailConfirme || !senha}>Cadastrar</Button>
                    <ForgotText onClick={() => navigate('/')}>Back to login</ForgotText>
                </Form>

            </RightBox>
        </Container>
    );
};

export default Login;
