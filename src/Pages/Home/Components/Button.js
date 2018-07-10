import styled from "styled-components";
export default styled.button`
  border-radius: 3px;
  background: transparent;
  color: #1a2433;
  font-weight: 500;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  padding: 5px;
  transition: color 0.5s ease;
  &:hover {
    color: #a5a6ac;
  }

  position: ${props => props.right && "absolute"};
  
  top: ${props => props.right && "0"};
  right: ${props => props.right && "0"};

  width: ${props => props.right && "200px"};
`;
