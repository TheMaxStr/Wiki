import {
  SWITCH_LANG,
  SEARCH_FETCH_LIST,
  SEARCH_DEL_ITEM,
  SEARCH_SET_CURRENT_PAGE,
  SEARCH_SET_ROWS_PER_PAGE,
  MODAL_WIKI_SHOW,
  MODAL_WIKI_HIDE
} from "../types";

const initialState = {
  lang: "ru",
  search: {
    list: [],
    count: 0,
    rowsPerPage: 5,
    currentPage: 0
  },
  modalWikiPreview: {
    open: false,
    pageid: 0
  }
};

const allowLangList = ["ru", "en"];

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_LANG: {
      if (!allowLangList.includes(action.payload.lang)) return state;
      if (action.payload.wiki) {
        action.payload.wiki.lang = action.payload.lang;
      }
      return {
        ...state,
        lang: action.payload.lang
      };
    }
    case SEARCH_FETCH_LIST: {
      const { list, count } = action.payload;
      const search = { ...state.search, list, count };
      return {
        ...state,
        search
      };
    }
    case SEARCH_SET_CURRENT_PAGE: {
      const search = { ...state.search, currentPage: action.payload };
      return {
        ...state,
        search
      };
    }
    case SEARCH_SET_ROWS_PER_PAGE: {
      const search = { ...state.search, rowsPerPage: action.payload };
      return {
        ...state,
        search
      };
    }
    case SEARCH_DEL_ITEM: {
      const list = state.search.list.filter(
        (item) => item.pageid !== action.payload
      );
      const search = { ...state.search, list };
      return {
        ...state,
        search
      };
    }
    case MODAL_WIKI_SHOW: {
      return {
        ...state,
        modalWikiPreview: {
          open: true,
          pageid: action.payload
        }
      };
    }
    case MODAL_WIKI_HIDE: {
      return {
        ...state,
        modalWikiPreview: { ...initialState.modalWikiPreview }
      };
    }
    default:
      return state;
  }
}
