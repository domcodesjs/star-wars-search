import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to='/'>
          <h1 className='animate__animated animate__zoomInDown'>Star Wars</h1>
        </Link>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 4.8rem;
  nav {
    a {
      text-decoration: none;
    }

    h1 {
      color: #ffe81f;
      font-size: 7.2rem;
      text-align: center;
      user-select: none;
      cursor: pointer;
    }
  }
`;

export default Header;
