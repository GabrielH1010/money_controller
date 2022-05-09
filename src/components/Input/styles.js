import styled from 'styled-components';
import { white } from 'styles/colorProvider';

export const Label = styled.p`
  color: black;
  margin: 3% 0 1.5% 0;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 1000px) {
    margin: 5% 0 1.5% 0;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  text-align: flex-start;
  align-items: center;
  background-color: ${white};
  border: none;
  outline: none;
  font-size: 15px;
  padding-left: 2%;
  margin-bottom: 2%;
  border-radius: ${(props) => props.radius || '10px'};
  height: ${(props) => props.height || '35px'};
  width: ${(props) => props.width || '250px'};

  input {
    border: none;
    height: 85%;
    width: 80%;
    background: ${white};
    outline: none;
    &&:focus {
      color: #ffc82b;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    height: 90%;
    width: 10%;
    width: ${(props) => (props.icon ? '10%' : '7px')};
    background-color: transparent;
    color: #8b8b8b;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
