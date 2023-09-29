// actions/index.js
import axios from 'axios';
export const FETCH_JOKES = 'FETCH_JOKES';
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS';

export const getJokes = () => (dispatch) => {
  dispatch({ type: FETCH_JOKES });
  console.log('Fetching joke...');

  axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((res) => {
      console.log(res.data); // Log the data from the Axios response
      dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
      // Handle the error or dispatch an error action if needed
    });
};

export const fetchJokes = () => {
  return { type: FETCH_JOKES };
};

export const fetchJokesSuccess = (jokes) => {
  return { type: FETCH_JOKES_SUCCESS, payload: jokes };
};
