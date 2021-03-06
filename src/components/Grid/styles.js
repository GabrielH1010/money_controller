import styled from "styled-components";
import { midleGray, primary, secondary } from "styles/colorProvider";

export const Table = styled.div`
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
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
    margin: 3px 0;
    font-size: 14px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 120px;
  margin: 5px 0 ;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
  width: 8px;
}
  ::-webkit-scrollbar-track {
  background: ${midleGray};
}
::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background: ${secondary};
  border: 1px solid ${primary};
}

  @media (max-width: 1200px) {
    height: 110px;
  }
`;
