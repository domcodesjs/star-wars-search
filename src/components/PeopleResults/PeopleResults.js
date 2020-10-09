import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersonCard from './PersonCard';

const PeopleResults = ({ people, searchTerm, searching }) => {
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const filterResults = () => {
      if (searchTerm.trim() === '') {
        return setFilteredResults([]);
      }

      return setFilteredResults(
        people.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };
    filterResults();
  }, [searchTerm, people, searching]);

  const renderResults = () => {
    if (!filteredResults || !filteredResults.length) {
      return (
        <PeopleNoResultsContainer>
          <h2>No Results</h2>
        </PeopleNoResultsContainer>
      );
    }

    return (
      <PeopleResultsContainer>
        {filteredResults.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </PeopleResultsContainer>
    );
  };

  return searching ? renderResults() : null;
};

const PeopleNoResultsContainer = styled.main`
  h2 {
    margin-top: 4.8rem;
    color: #fff;
    text-align: center;
  }
`;

const PeopleResultsContainer = styled.main`
  margin: 4.8rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  h2 {
    color: #fff;
  }
`;

export default PeopleResults;
