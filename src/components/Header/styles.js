import styled from 'styled-components';
import { primary, midleGray } from 'styles/colorProvider';

export const Container = styled.header`
  background-color: ${midleGray};
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 12vh;
  }
`;

export const ContentArea = styled.div`
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  width: 380px;
  height: 100%;
  justify-content: flex-start;
  flex-direction: row;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  color: ${primary};
  margin: 22px 0px 0px 15px;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export const Image = styled.image`
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    display: none;
  }
`;