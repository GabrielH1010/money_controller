import styled from "styled-components";
import {white} from "styles/colorProvider"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 10%;
  background-color: white;
  border-radius: 5px;
  margin: 2px auto;
  justify-content: column;
  padding: 5px 0;

`;

export const Header = styled.div`
  display: flex;
  background: white;
  width: 99%;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 1px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color:${white};
    transition: all 0.2s ease;

  }

  h3{
    font-size: 16px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
`;
