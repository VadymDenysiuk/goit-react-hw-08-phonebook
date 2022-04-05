import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  margin: 0 auto;
  padding: 60px 15px;
  /* border: 2px solid teal; */
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  background-color: #f5f5f5;
`;

export const Text = styled.p`
  color: #566573;
  margin-bottom: 10px;
`;
