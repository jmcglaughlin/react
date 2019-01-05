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

  // make use of lodash specialty methods uniq and map
  // _map pulls out the 'userId' parameter from posts array
  // then _.uniq extracts only userIds
  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  // we do not need an await because we don't care since nothing else is dependent on it
  userIds.forEach(id => dispatch(fetchUser()));
  // NOTE We are still calling 100 times!!!
};

// shortCode
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchUser2 = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
