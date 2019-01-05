import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Long code
// export const fetchPosts = () => {
//   // return function (dispatch, getState) {
//   return async dispatch => {
//     //not using getState so can drop
//     const response = await jsonPlaceholder.get('/posts');

//     // no longer return since using Middleware thunk
//     // need to invoke the dispatch function
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };

// Now we can make use of getState to get access to Store
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // leverage lodash _chain to reduce method
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value(); // need this key function to execute the chain
};

// shortCode
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  console.log(id);
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchUser183 = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
