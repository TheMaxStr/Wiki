import * as TYPE from "./types";

export const addListWiki = (data) => ({
  type: TYPE.SEARCH_FETCH_LIST_OK,
  payload: {
    list: data.result || [],
    count: data.counts || 0
  }
});

export const fetchListEvent = (query = "") => {
  return { type: TYPE.EVENT_SEARCH_FETCH_LIST, payload: query };
};

export const delSearchItem = (pageid) => {
  return { type: TYPE.SEARCH_DEL_ITEM, payload: pageid };
};

export const switchLangEvent = (lang) => {
  return { type: TYPE.EVENT_SWITCH_LANG, payload: { lang } };
};

export const setStoreLang = (lang) => {
  return { type: TYPE.SET_LANG_STORE, payload: { lang } };
};

export const setCurrentPage = (page) => {
  return { type: TYPE.SEARCH_SET_CURRENT_PAGE, payload: page };
};

export const setSearchLoad = (status) => {
  return { type: TYPE.SEARCH_SET_LOADING, payload: status };
};

export const setRowsPerPage = (perPage) => {
  return { type: TYPE.SEARCH_SET_ROWS_PER_PAGE, payload: perPage };
};

export const showModalWikiPreview = (pageid) => {
  return { type: TYPE.MODAL_WIKI_SHOW, payload: pageid };
};

export const hideModalWikiPreview = () => {
  return { type: TYPE.MODAL_WIKI_HIDE };
};
