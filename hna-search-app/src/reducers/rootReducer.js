import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    NEW_SEARCH
} from "../actions/types";

const initState = {
    loading: false,
    posts: [],
    history: [],
    error: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                posts: action.payload.hits,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
            case NEW_SEARCH: {
                return { 
                    ...state, 
                    history: [...state.history, action.terms]
                 };
            }
        default: return state
    }
}

export default reducer;