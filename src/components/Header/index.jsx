import React from "react";
import logoBank from "../../assets/logo.svg";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContentArea,
  Logo,
  Image,
  Title,
  LogoutButton,
} from "./styles";

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <ContentArea>
        <Logo onClick={() => navigate("/home")}>
          <Image>
            <img src={logoBank} alt="" />
          </Image>
          <Title>Money Controller</Title>
        </Logo>
        <LogoutButton onClick={() => [logout(), navigate("/")]}>
          <BiLogOut style={{ marginRight: 8 }} />
          Logout
        </LogoutButton>
      </ContentArea>
    </Container>
  );
}

export default Header;
