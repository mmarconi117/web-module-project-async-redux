import { FETCH_JOKES, FETCH_JOKES_SUCCESS } from "../actions";

const initialState = {
    jokes: [],
    error: '',
    isFetching: false
}

 function reducer(state = initialState, action) {
    // console.log('reducer', action)
    switch (action.type) {
        case FETCH_JOKES:
            return {
                ...state,
                jokes: action.payload,
                isFetching: true
            }
        case FETCH_JOKES_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                isFetching: false
            }
        default:
            return state;

    }
}

export default reducer;
