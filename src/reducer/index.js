import { FETCH_JOKES, FETCH_JOKES_SUCCESS } from "../actions";
import { combineReducers } from 'redux'

const initialState = {
    jokes:{
        url: '',
        source: '',
        like: 0
    },
    isFetching: false,
    error: ''
}


 function jokes(state = initialState, action) {
    console.log('reducer', action.payload)
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

// export default reducer;
export default combineReducers({jokes})
