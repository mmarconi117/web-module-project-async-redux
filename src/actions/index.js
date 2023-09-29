import axios from 'axios';

export const FETCH_JOKES = 'FETCH_JOKES';
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS';

export const getJokes = () => (dispatch) => {
  dispatch(fetchJokes()); // Dispatch the fetchJokes action to indicate that the fetch is in progress

  console.log('Fetching joke...');

  axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((res) => {
      console.log(res.data); // Log the data from the Axios response
      dispatch(fetchJokesSuccess(res.data)); // Dispatch the fetchJokesSuccess action with the fetched data
    })
    .catch((err) => {
      console.log(err);
      // Handle the error or dispatch an error action if needed
    });
};

export const fetchJokes = () => {
  return { type: FETCH_JOKES };
};

export const fetchJokesSuccess = (joke) => {
  return { type: FETCH_JOKES_SUCCESS, payload: joke };
};
