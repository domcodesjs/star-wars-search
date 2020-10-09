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
          <input
            type='text'
            placeholder='type a name to search for...'
            value={searchTerm}
            aria-label='Search'
            onChange={(e) => setSearchTerm(e.target.value)}
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
  width: 100%;

  div {
    width: 100%;
  }

  input {
    border: none;
    border-left: none;
    height: 7.2rem;
    border-radius: 3rem;
    width: 100%;
    font-size: 1.6rem;
    padding-left: 1.6rem;

    @media screen and (min-width: 576px) {
      font-size: 2.4rem;
    }

    @media screen and (min-width: 992px) {
      font-size: 4rem;
    }
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
