import jsonPlaceholder from '../api/jsonPlaceholder';

// Long code
// export const fetchPosts = () => {
//   // return function (disatch, getState) {
//   return async dispatch => {
//     //not using getState so can drop
//     const response = await jsonPlaceholder.get('/posts');

//     // no longer return since using Middleware thunk
//     // need to invoke the dispatch function
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };

// shortCode
export const fetchPosts = async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
