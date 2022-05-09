import styled from "styled-components";
import { primary} from 'styles/colorProvider'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 5px 15px;
  width: 100%;
  background: white ;
  cursor: pointer;

  :hover {
    transition: all 0.4s ease;
    color: ${primary};
    box-shadow: 12px 12px 5px #3B2476;
  }

  @media (max-width: 1000px) {
    width: 100%;

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Title = styled.p`
 font-size: 20px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 20px;

  @media (max-width: 1100px) {
    font-size: 18px;
  }
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color:#8888;
  margin: -10px 0 5px 0;

  @media (max-width: 1100px) {
    font-size: 24px;
  }

`;
