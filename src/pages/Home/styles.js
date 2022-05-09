import styled from 'styled-components';
import { primary, white, secondary } from 'styles/colorProvider';

export const Container = styled.div`
  background-color: ${primary};
  width: 100%;
  height: 68vh;
  display: flex;
  align-items: top;
  justify-content: center;

  
  @media (max-width: 1000px) {
    height: 100%;
  }
`;

export const Area = styled.div`
  width: 80%;
  background-color: ${primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1000px) {
    width: 100%;    
  }
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 50px 0;
  }
`;

export const Title = styled.h3`
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: ${white};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
  cursor: pointer;
  :hover{
    opacity: 0.9;
  }

  @media (max-width: 1000px) {
    margin-bottom: -30px;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 285px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${secondary};
  height: 300px;
  background: white;
  margin: 0 25px 0 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1{
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
  }
  p{
    font-size: 16px;
    margin: 10px 0;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;

  }
  img{
    width: 100px;
  }

  :hover{
    width: 295px;
    height: 310px;
    transition: all 0.4s ease;
    color: ${primary};
    box-shadow: 12px 12px 5px #3B2476;
  }

  @media (max-width: 1000px) {
    margin: 15px 0;
  }
`;
