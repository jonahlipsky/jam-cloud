import { search } from '../util/search_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const receiveSearchResults = (result) => ({
  type: RECEIVE_SEARCH_RESULTS, 
  data: result
});

export const searchThunk = queryString => dispatch => {
  return search(queryString).then(
    result_set => dispatch(receiveSearchResults(result_set))
  );
};