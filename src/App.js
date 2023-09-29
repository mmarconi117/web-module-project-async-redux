import React from 'react';
import { connect } from 'react-redux';
import { fetchJokesSuccess, getJokes } from './actions';
import { useSelector } from 'react-redux';

import './App.css';

function App(props) {
  const joke = useSelector(state => state.reducer.joke);

  const fetchJokes = () => {
    props.getJokes();
  };

  return (
    <div className="App">
      <h2>Welcome to Joke World</h2>
      <div>
        <button onClick={fetchJokes}>Fetch Joke!</button>
      </div>
      <div>
        <h3>Joke of the Day</h3>
        <p>{joke}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    joke: state.reducer.joke
  };
};

export default connect(mapStateToProps, { fetchJokesSuccess, getJokes })(App);
