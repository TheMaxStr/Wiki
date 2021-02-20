import * as TYPE from "../types";
import { initialState } from '../state';


export default function appReducer(state, action) {
  switch (action.type) {
    case TYPE.SWITCH_LANG: {
      return {
        ...state,
        lang: action.payload.lang
      };
    }
    case TYPE.SEARCH_FETCH_LIST_OK: {
      const { list, count } = action.payload;
      const search = { ...state.search, list, count };
      return {
        ...state,
        search
      };
    }
    case TYPE.SEARCH_SET_CURRENT_PAGE: {
      const search = { ...state.search, currentPage: action.payload };
      return {
        ...state,
        search
      };
    }
    case TYPE.SEARCH_SET_ROWS_PER_PAGE: {
      const search = { ...state.search, rowsPerPage: action.payload };
      return {
        ...state,
        search
      };
    }
    case TYPE.SEARCH_DEL_ITEM: {
      const list = state.search.list.filter(
        (item) => item.pageid !== action.payload
      );
      const search = { ...state.search, list };
      return {
        ...state,
        search
      };
    }
    case TYPE.MODAL_WIKI_SHOW: {
      return {
        ...state,
        modalWikiPreview: {
          open: true,
          pageid: action.payload
        }
      };
    }
    case TYPE.MODAL_WIKI_HIDE: {
      return {
        ...state,
        modalWikiPreview: { ...initialState.modalWikiPreview }
      };
    }
    default:
      return state;
  }
}
