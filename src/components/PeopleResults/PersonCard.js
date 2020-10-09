import React from 'react';
import styled from 'styled-components';

const PersonCard = ({ person }) => {
  return (
    <StyledCard>
      <h3>{person.name}</h3>
      <div className='info'>
        <div>
          <p>
            <span>Height:</span> {person.height}"
          </p>
          <p>
            <span>Hair Color:</span> {person.hair_color}
          </p>
          <p>
            <span>Skin Color:</span> {person.skin_color}
          </p>
        </div>
        <div>
          <p>
            <span>Eye Color:</span> {person.eye_color}
          </p>
          <p>
            <span>Birth Year:</span> {person.birth_year}
          </p>
          <p>
            <span>Gender:</span> {person.gender}
          </p>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: #fff;
  color: #000;
  padding: 0.8rem;

  h3 {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }

  p span {
    font-weight: 700;
  }

  div.info {
    display: flex;
    justify-content: space-between;
  }
`;

export default PersonCard;
