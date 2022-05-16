import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 90px;
  margin: 0 auto;
  display: flex;
  gap: 25px;
  justify-content: space-around;

  @media (max-width: 1200px) {
    margin-top: 10px;
    height: 80px;
  }
`;
