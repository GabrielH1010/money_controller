import styled from "styled-components";
import {primary} from 'styles/colorProvider';

export const Container = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 5px 0px;

  @media (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Label = styled.p`
  color: black;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`;

export const InputRadio = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin: 0 8px 0 25px;
    accent-color: ${primary};
  }
`;
