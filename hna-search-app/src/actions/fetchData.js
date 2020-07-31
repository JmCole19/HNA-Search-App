import axios from 'axios';
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from './types';

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest())
        axios
            .get("https://hn.algolia.com/api/v1/search?query=redux")
            .then(response => {
                const posts = response.data
                dispatch(fetchDataSuccess(posts))
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message))
            })
    }
}

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

const fetchDataSuccess = posts => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: posts
    }
}

const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

