import axios from 'axios';
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    NEW_SEARCH
} from './types';


//fetches data from the API based on the search input
export const fetchData = (query) => {
    return (dispatch) => {
        dispatch(fetchDataRequest())
        axios
            .get("https://hn.algolia.com/api/v1/search?query=" + query)
            .then(response => {
                const posts = response.data
                dispatch(fetchDataSuccess(posts))
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message))
            })
    }
}
//requesting data
export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}
//if successful, creates a data payload
const fetchDataSuccess = posts => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: posts
    }
}
//otherwise creates an error
const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}
  
//handles the search
export const searchData = terms => {
    return {
        type: NEW_SEARCH,
        terms: terms
    }
}