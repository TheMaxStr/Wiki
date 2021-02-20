import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { addListWiki, setStoreLang } from "../actions";
import { SEARCH_FETCH_LIST, SWITCH_LANG } from "../types";
import wiki from "../../api/wiki";

const getPageParam = (state) => [
  state.search.rowsPerPage,
  state.search.currentPage,
];

function* fetchList(action) {
  if (action.payload) {
    const [rowsPerPage, currentPage] = yield select(getPageParam);
    const offsetPage = currentPage * rowsPerPage;
    const data = yield call(
      [wiki, 'search'],
      action.payload.trim(),
      offsetPage,
      rowsPerPage
    );
    if (data && data.counts > 0) {
      console.log("SEARCH", data);
      yield put(addListWiki(data));
    }
  }
}

function* switchLang(action) {
  if (wiki.allowLangList.includes(action.payload.lang)) {
    wiki.lang = action.payload.lang;
    yield put(setStoreLang(action.payload.lang));
  }
}

export function* watchFetchList() {
  yield takeLatest(SEARCH_FETCH_LIST, fetchList);
}

export function* watchSwitchLang() {
  yield takeEvery(SWITCH_LANG, switchLang);
}
