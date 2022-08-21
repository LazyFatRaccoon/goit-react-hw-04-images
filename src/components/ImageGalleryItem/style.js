import styled from '@emotion/styled';

export const Li = styled.li`
  display: inline-block;
  width: ${props=>props.theme.imageSizes.width}px;
  height: ${props=>props.theme.imageSizes.height}px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
