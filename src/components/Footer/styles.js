import styled from 'styled-components';
import { primary, midleGray, white } from 'styles/colorProvider';

export const Container = styled.footer`
  background-color: ${midleGray};
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 55vh;
  }
`;

export const ContentArea = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Div = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    margin-top: 20px;
  }
`;

export const NotMobile = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    padding: 0px 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-weight: 700;
  color: ${primary};
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 12px;

  @media (max-width: 1000px) {
    margin-top: 10px;
  }
`;

export const Subtitle = styled.p`
  font-size: 13px;
  line-height: 15px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-weight: 700;
  color: ${primary};
  text-align: left;
  margin-bottom: 8px;
  cursor: pointer;

  @media (max-width: 1000px) {
    margin-top: 10px;
  }
`;

export const LinkProfile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: left;

  a{
    margin: 0 20px 0 0;
    cursor: pointer;
    color: ${primary};
    :hover{
        color: ${white};
    }

  }

  .copyright{
    font-size: 14px;
    color: #888888;
    font-weight: 300;
  }

  @media (max-width: 1000px) {
    display: flex;

  }
;`