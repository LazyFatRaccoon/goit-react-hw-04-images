import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';
import { Field } from 'formik';

export const SearchBarPanel = styled.header`
  position: fixed;
  top: 0;
  width:100%;
  background-color:  ${props=>props.theme.colors.accentColor};
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 0;
  top: 0;
  width: ${props=>props.theme.sizes.medium}px;
  height: ${props=>props.theme.sizes.medium}px;  
  padding: 5px 10px;

  &:hover {
    fill: red;
  }
`;
export const Input = styled.input`
  font-size: ${props=>props.theme.sizes.medium}px;
  padding-left: ${props=>props.theme.sizes.medium*1.5}px;
  
`;
export const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const Label = styled.label`
  position: relative;
`;

export const StyledField = styled(Field)`
  font-size: ${props=>props.theme.sizes.medium}px;
  
`;
export const Button = styled.button`
font-size: ${props=>props.theme.sizes.medium}px;
`;
