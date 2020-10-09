import React, { useState, useEffect } from 'react';
import PeopleResults from '../PeopleResults/PeopleResults';
import SearchForm from '../SearchForm/SearchForm';

const Home = ({ people }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const checkSearching = () => {
      return searchTerm.trim() !== ''
        ? setSearching(true)
        : setSearching(false);
    };
    checkSearching();
  }, [searchTerm]);

  return (
    <div>
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searching={searching}
      ></SearchForm>
      <PeopleResults
        searchTerm={searchTerm}
        searching={searching}
        people={people}
      ></PeopleResults>
    </div>
  );
};

export default Home;
