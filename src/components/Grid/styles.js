import styled from "styled-components";
import { primary } from "styles/colorProvider";

export const Table = styled.div`
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  margin: 0px auto;
  justify-content: column;
  
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  margin: 0;
  border-bottom: 1.5px solid ${primary};

  h3{
    margin: 5px 0;
    font-size: 20px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 135px;
  margin:5px 0 ;
  overflow: hidden;
  overflow-y: auto;
`;
