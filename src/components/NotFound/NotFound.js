import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <StyledMain>
      <h2>404 Page Not Found</h2>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  h2 {
    color: #fff;
    margin-top: 10rem;
    text-align: center;
  }
`;

export default NotFound;
