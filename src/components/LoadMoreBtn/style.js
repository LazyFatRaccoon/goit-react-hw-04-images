import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  background-color: ${props=>props.theme.colors.accentColor};
  padding: 10px 30px;
  color: white;
  border-radius: 4px;
  font-size: 20px;
  margin: 20px auto;
`;
