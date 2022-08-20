import { SearchBarPanel,Container, Input,SearchBtn, SearchIcon } from './style';
import { Formik, Field, Form } from 'formik';

import React from 'react';

const SearchBar = ({ onInputChange }) => {
  let timeout;

  const onChange = query => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => onInputChange(query), 750);
  };

  return (
    <SearchBarPanel>
      <Container>
        
        <Input  placeholder={'Search images and photos'} type='text' onChange={(e)=>onChange(e.currentTarget.value)} />
        <SearchBtn type='submit' aria-label='Search'>
          <SearchIcon size={40}/>
        </SearchBtn>
        
      </Container>
    </SearchBarPanel>
  );
};

export default SearchBar;
