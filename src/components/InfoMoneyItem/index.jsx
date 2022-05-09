import React from "react";
import { Container, Header, Title, Total } from "./styles";

const InfoMoneyItem = ({ title, Icon, value }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon />
      </Header>
      <Total>{value}</Total>
    </Container>
  );
};

export default InfoMoneyItem;
