// App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchJokesSuccess, getJokes } from './actions'; // Import the fetchJokesSuccess and getJokes actions

import './App.css';

function App(props) {
  const fetchJokes = () => {
    // Call the getJokes action to trigger the API request
    props.getJokes();
  };

  return (
    <div className="App">
      <h2>Welcome to Joke World</h2>
      <div>
        <button onClick={fetchJokes}>Fetch Joke!</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
  };
};

export default connect(mapStateToProps, { fetchJokesSuccess, getJokes })(App);
