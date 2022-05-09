import React from "react";
import { InfoMoneyItem } from "components";
import { Container } from "./styles";

import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineDollarCircle,
} from "react-icons/ai";

const InfoMoney = ({ income, expense, total }) => {
  return (
    <Container>
      <InfoMoneyItem title="Input" Icon={AiOutlineArrowUp} value={income} />
      <InfoMoneyItem title="Output" Icon={AiOutlineArrowDown} value={expense} />
      <InfoMoneyItem title="Total" Icon={AiOutlineDollarCircle} value={total} />
    </Container>
  );
};

export default InfoMoney;
