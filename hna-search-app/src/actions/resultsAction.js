// import axios from 'axios';

// export const REQUEST_POSTS = 'REQUEST_POSTS'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const SELECT_POST = 'SELECT_POST'
// export const INVALIDATE_POST = 'INVALIDATE_POST'

// export function selectPost(post) {
//     return {
//       type: SELECT_POST,
//       post
//     }
//   }
  
//   export function invalidatePost(post) {
//     return {
//       type: INVALIDATE_POST,
//       post
//     }
//   }

// function requestPosts(post) {
//     return {
//         type: REQUEST_POSTS,
//         post
//     }
// }

// function receivePosts(post, response) {
//     return {
//         type: RECEIVE_POSTS,
//         post,
//         posts: response.data.items.map(item => item.data),
//         receivedAt: Date.now()
//     }
// }

// let id = [1]

// function fetchPosts(post) {
//     return dispatch => {
//       dispatch(requestPosts(post))
//       return axios.get('http://hn.algolia.com/api/v1/items/' + id)
//         .then(response => dispatch(receivePosts(post, response)))
//     }
//   }

// function shouldFetchPosts(state, post) {
//     const posts = state.items[post]
//     if (!posts) {
//         return true
//     } else if (posts.isFetching) {
//         return false
//     } else {
//         return posts.didInvalidate
//     }
// }

// export default function fetchPostsIfNeeded(post) {
//     return (dispatch, getState) => {
//         if (shouldFetchPosts(getState(), post)) {
//             return dispatch(fetchPosts(post))
//         }
//     }
// }