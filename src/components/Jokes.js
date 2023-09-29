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
      <button onClick={fetchJokes}>Fetch Joke!</button>
      <div>
        {props.jokes.map((joke) => (
          <div key={joke.id}>
            <p>Type: {joke.type}</p>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      jokes: state.reducer.jokes // Replace 'reducerName' with the actual name of your reducer
    };
  };


export default connect(mapStateToProps, { fetchJokes, getJokes })(Jokes);
