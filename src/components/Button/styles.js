import styled from 'styled-components';
import { primary, white} from '../../styles/colorProvider';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background || primary}};
  border: none;
  color: ${white};
  outline: none;
  cursor: pointer;
  margin: 20px;
  transition: all ease-in-out 0.2s;
  font-size: ${(props) => props.fontSize || '15px'};
  border-radius: 50px;
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '150px'};

  &&:hover {
    opacity: 0.7;
    color: ${white};
  }
  &&:disabled {
    opacity: 0.7;
    cursor: default;
    color: ${white};
  }

  @media (max-width: 1000px) {
    height: 40px;
    width: 60%;
  }
`;
