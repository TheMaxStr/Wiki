import * as TYPE from "../types";
import { initialState } from '../state';

const { search: initStateSearch } = initialState;

export default (state = initStateSearch, action) => {
  switch (action.type) {
    case TYPE.SEARCH_FETCH_LIST_OK: {
      const { list, count } = action.payload;
      return {
        ...state,
        list,
        count
      };
    }
    case TYPE.SEARCH_SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload 
      };
    }
    case TYPE.SEARCH_SET_ROWS_PER_PAGE: {
      return {
        ...state,
        rowsPerPage: action.payload 
      };
    }
    case TYPE.SEARCH_DEL_ITEM: {
      const list = state.search.list.filter(
        (item) => item.pageid !== action.payload
      );
      return {
        ...state,
        list
      };
    }
    case TYPE.SEARCH_SET_LOADING: {
      return {
        ...state,
        loading: !!action.payload 
      };
    }
    default:
      return state;
  }
}