import {
  SearchBarPanel,
  Container,
  Input,
  Button,
  SearchIcon,
  Label,
  StyledField,
} from './style';
import { Formik, Form, ErrorMessage } from 'formik';

import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";




const SearchBar = ({ onInputChange, onThemeChange, currentTheme }) => {
  let timeout;
  
  const onChange = query => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => onInputChange(query), 750);
  };

  return (
    <SearchBarPanel>
      { <ToggleButton  onChange={()=>onThemeChange()}/> }
      <Container>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={(values) => {
            console.log(values.search);
            onInputChange(values.search);
          }}
        >
          <Form>
            <StyledField
              name="search"
              type="text"
              required
              placeholder="Search with formik"
            />
            <ErrorMessage name="firstName" />
            <Button type="submit">Search</Button>
          </Form>
        </Formik>
      </Container>

      <Container>
        <Label>
          <Input
            placeholder={'Search with debounce'}
            type="text"
            onChange={e => onChange(e.currentTarget.value)}
          />

          <SearchIcon/>
        </Label>
      </Container>
    </SearchBarPanel>
  );
};

SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
export default SearchBar;
