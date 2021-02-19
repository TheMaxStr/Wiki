import {
  SWITCH_LANG,
  SEARCH_FETCH_LIST,
  SEARCH_DEL_ITEM,
  SEARCH_SET_CURRENT_PAGE,
  SEARCH_SET_ROWS_PER_PAGE,
  MODAL_WIKI_SHOW,
  MODAL_WIKI_HIDE
} from "./types";
import wiki from "../api/wiki";

const addListWiki = (data) => ({
  type: SEARCH_FETCH_LIST,
  payload: {
    list: data.result || [],
    count: data.counts || 0
  }
});

export const fetchList = (query = "") => {
  return (dispatch, getState) => {
    const {
      search: { rowsPerPage, currentPage }
    } = getState();
    const offsetPage = currentPage * rowsPerPage;
    wiki.search(query.trim(), offsetPage, rowsPerPage).then((data) => {
      if (data && data.counts > 0) {
        console.log("SEARCH", data);
        dispatch(addListWiki(data));
      }
    });
  };
};

export const delSearchItem = (pageid) => {
  return { type: SEARCH_DEL_ITEM, payload: pageid };
};

export const switchLang = (lang) => {
  return { type: SWITCH_LANG, payload: { lang, wiki } };
};

export const setCurrentPage = (page) => {
  return { type: SEARCH_SET_CURRENT_PAGE, payload: page };
};

export const setRowsPerPage = (perPage) => {
  return { type: SEARCH_SET_ROWS_PER_PAGE, payload: perPage };
};

export const showModalWikiPreview = (pageid) => {
  return { type: MODAL_WIKI_SHOW, payload: pageid };
};

export const hideModalWikiPreview = () => {
  return { type: MODAL_WIKI_HIDE };
};
