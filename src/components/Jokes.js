import React from 'react';
import { connect } from 'react-redux';
import { fetchJokes, getJokes } from '../actions';

const Jokes = (props) => {
  const fetchJokes = (e) => {
    e.preventDefault();
    console.log('Fetching joke...');
    props.getJokes();
  };

  return (
    <div>
      <h2>Joke of the Day</h2>
      <p>{props.joke}</p>
      <button onClick={fetchJokes}>Get Joke</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.reducer.joke // Replace 'reducerName' with the actual name of your reducer
  };
};

export default connect(mapStateToProps, { fetchJokes, getJokes })(Jokes);
