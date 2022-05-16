import styled from 'styled-components';
import { primary, white, secondary } from 'styles/colorProvider';

export const Container = styled.div`
  background-color: ${primary};
  width: 100%;
  height: 68vh;
  display: flex;
  align-items: top;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 95vh;
  }
  @media (max-width: 400px) {
    height: 90vh;
  }
`;

export const Area = styled.div`
  width: 100%;
  background-color: ${primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  background-color: ${(props) => props.background || primary};
  width: 80%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  width: 280px;
  height: 100px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${secondary};
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

    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }
  p{
    font-size: 20px;
    margin: 10px 0;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 1000px) {
    font-size: 18px
    }
  }

  :hover{
    width: 290px;
    height: 110px;
    transition: all 0.4s ease;
    color: ${primary};
    box-shadow: 12px 12px 5px #3B2476;

    @media (max-width: 1000px) {
      width: 155px;
      height: 85px;
    }
  }

  @media (max-width: 1000px) {
    margin: 15px 0;
    width: 150px;
    height: 80px;
  }
`;
