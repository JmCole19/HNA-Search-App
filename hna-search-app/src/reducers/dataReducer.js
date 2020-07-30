import { GET_DATA, SET_DATA, API_START, API_END } from '../actions/types';

function dataReducer(state = {}, action) {
    switch (action.type) {
        case SET_DATA: return { data: action.payload }
        case API_START:
            if (action.payload === GET_DATA) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
            break;
        case API_END:
            if (action.payload === GET_DATA) {
                return {
                    ...state,
                    isLoadingData: false
                };
            }
            break;
        default:
            return state;
    }
}

export default (dataReducer);