import React from "react";
import logoBank from "../../assets/logo.svg";
import { Container, ContentArea, Logo, Image, Title } from "./styles";

function Header() {
  return (
    <Container>
      <ContentArea>
        <Logo>
          <Image>
            <img src={logoBank} alt="" />
          </Image>
          <Title>Money Controller</Title>
        </Logo>
        <button>sair</button>
      </ContentArea>
    </Container>
  );
}

export default Header;
