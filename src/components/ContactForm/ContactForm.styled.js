import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  color: #212121;
  margin-bottom: 6px;
`;
export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 380px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    border: 1px solid #2196f3;
  }
  /*  display: block;
  width: 400px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding: 12px 25px;
 
  cursor: pointer;
 */
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border-radius: 4px;
  min-width: 200px;
  height: 50px;
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
  }
`;
