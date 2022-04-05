import styled from 'styled-components';

export const Text = styled.p`
  color: #566573;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /*   margin: 0 auto; */
  border-radius: 4px;
  min-width: 80px;
  height: 40px;
  color: #ffffff;
  background-color: #2196f3;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  cursor: pointer;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #188ce8;
    transform: scale(1.1);
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
