import React from 'react';
import { connect } from 'react-redux';
import { fetchJokesSuccess, getJokes } from './actions';
import { useEffect } from 'react';

import './App.css';

function App(props) {
  const {joke, isFetching, error, dispatch} = props;


//   useEffect(() => {
//     dispatch(getJokes());
// }, []);

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
        <p>{joke && joke.setup}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    joke: state.combineReducers
  };
};

export default connect(mapStateToProps, { fetchJokesSuccess, getJokes })(App);
