import axios from 'axios';
import { SET_DATA, API_START, API_END, API_ERROR, GET_DATA } from './types';

export const getData = async () => {
    return {
        function(dispatch) {
            return axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
                .then(({ data }) => {
                    console.log(data)
                    dispatch(setData(data))
                })
        },
        type: GET_DATA
    }
}

function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    };
}

export const apiError = data => ({
    type: API_ERROR,
    payload: data.error
})

export const apiStart = label => ({
    type: API_START,
    payload: label
});

export const apiEnd = label => ({
    type: API_END,
    payload: label
});