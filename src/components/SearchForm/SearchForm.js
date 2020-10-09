import React from 'react';
import styled from 'styled-components';
import xIcon from './x.svg';

const SearchForm = ({ searching, searchTerm, setSearchTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledMain>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor='searchTerm'>Search</label> */}
          <input
            type='text'
            id='searchTerm'
            placeholder='type a name to search for...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            maxLength='27'
          />
        </div>
        {searching ? (
          <button type='button' onClick={() => setSearchTerm('')}>
            <img src={xIcon} alt='Clear Icon' />
          </button>
        ) : null}
      </StyledForm>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #ffe81f;
    font-size: 7.2rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2.4rem;

  select {
    text-transform: capitalize;
    border-radius: 3rem 0 0 3rem;
    border: none;
    height: 7.2rem;
    cursor: pointer;
    width: 12rem;
    text-align-last: center;

    /* :focus {
      box-shadow: 0 0 3pt 2pt red;
    } */
  }

  input {
    border: none;
    border-left: none;
    height: 7.2rem;
    border-radius: 3rem;
    width: 75rem;
    font-size: 4rem;
    padding-left: 1.6rem;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10rem;
    width: 4.8rem;
    height: 4.8rem;
    position: absolute;
    right: 1.6rem;
    background: #000;
  }
`;

export default SearchForm;
