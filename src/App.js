import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';
import config from './config';
import GlobalStyle from './globalStyle';

const App = () => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    (async () => {
      setPeople(await getAllStarwarsPeople());
    })();
  }, []);

  const getAllStarwarsPeople = () => {
    if (localStorage.getItem('people')) {
      return JSON.parse(localStorage.getItem('people'));
    }

    let people = [];
    return axios(`${config.API_URL}/people/`)
      .then((response) => {
        people = response.data.results;
        return response.data.count;
      })
      .then((count) => {
        const numberOfPagesLeft = Math.ceil((count - 1) / 10);
        let promises = [];
        for (let i = 2; i <= numberOfPagesLeft; i++) {
          promises.push(axios(`${config.API_URL}/people?page=${i}`));
        }
        return Promise.all(promises);
      })
      .then((response) => {
        people = response.reduce(
          (acc, data) => [...acc, ...data.data.results],
          people
        );
        localStorage.setItem('people', JSON.stringify(people));
        return people;
      })
      .catch((err) => console.log(err));
  };

  // another day possibly. lets just get people for now.
  // const getSearchTypes = async () => {
  //   try {
  //     const { API_URL } = config;
  //     const { data } = await axios.get(`${API_URL}`);
  //     return setSearchTypes(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return people ? (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home people={people}></Home>
          </Route>
          <Route exact path='/404'>
            <NotFound></NotFound>
          </Route>
          <Route>
            <Redirect to='/404' />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  ) : null;
};

const Wrapper = styled.div`
  width: 96rem;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
