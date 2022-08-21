import styled from '@emotion/styled';
import ScrollToBottom from 'react-scroll-to-bottom';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  padding: 20px;
  margin: 0 auto;
  margin-top: ${props=>props.theme.sizes.medium*2}px;

  list-style-type: none;
`;

export const ScrollToBottomStyled = styled(ScrollToBottom)`
  height: 80vh;
  width: 100%;
`;
