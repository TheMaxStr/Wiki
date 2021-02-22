import * as TYPE from "../types";
import { initialState } from '../state';

const { app: initStateApp } = initialState;

export default (state = initStateApp, action) => {
  switch (action.type) {
    case TYPE.SET_LANG_STORE: {
      return {
        ...state,
        lang: action.payload.lang
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