import axios from 'axios';
import { SET_DATA, API_START, API_END } from './types';

export function getData() {
    return function (dispatch) {
        return axios.get('http://hn.algolia.com/api/v1/search?query=...')
            .then(({ data }) => {
                dispatch(setData(data))
            })
    }
}

function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    };
}

export const apiStart = label => ({
    type: API_START,
    payload: label
  });
  
  export const apiEnd = label => ({
    type: API_END,
    payload: label
  });