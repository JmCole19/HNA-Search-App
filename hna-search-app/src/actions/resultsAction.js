import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_POST = 'SELECT_POST'
export const INVALIDATE_POST = 'INVALIDATE_POST'

export function selectPost(post) {
    return {
      type: SELECT_POST,
      post
    }
  }
  
  export function invalidatePost(post) {
    return {
      type: INVALIDATE_POST,
      post
    }
  }

function requestPosts(post) {
    return {
        type: REQUEST_POSTS,
        post
    }
}

function receivePosts(post, json) {
    return {
        type: RECEIVE_POSTS,
        post,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts(subreddit) {
    return dispatch => {
      dispatch(requestPosts(subreddit))
      return axios.get('http://hn.algolia.com/api/v1/search?query=...')
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
    }
  }

export function shouldFetchPosts(state, post) {
    const posts = state.posts[post]
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(post) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), post)) {
            return dispatch(fetchPosts(post))
        }
    }
}