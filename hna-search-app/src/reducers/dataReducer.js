import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions/types"

const initState = {
    loading: false,
    posts: [],
    error: ''
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
            default: return state
    }
}

export default reducer;