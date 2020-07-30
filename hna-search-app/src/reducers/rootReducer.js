import {
    RECEIVE_POSTS,
    REQUEST_POSTS,
    SELECT_POST,
    INVALIDATE_POST
} from '../actions/resultsAction';
import { combineReducers } from 'redux';
import {SEARCH} from '../actions/searchAction';

function selectedPost(state = 'reactjs', action) {
    switch (action.type) {
      case SELECT_POST:
        return action.post
      default:
        return state
    }
  }

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function displayPosts(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_POST:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.post]: posts(state[action.post], action)
            })
        default:
            return state
    }
}

const initState = {
    value: '',
    items: []
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH: {
            let { value } = action;
            const items = state.items.filter((item) => item.title.toLowerCase().includes(state.value.toLowerCase()));
            return { ...state, value, items };
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    displayPosts,
    selectedPost,
})

export default (rootReducer, searchReducer);