import { fork, all } from "redux-saga/effects";
import { watchFetchList, watchSwitchLang } from './wiki';

export default function* root() {
  const allWatchers = {
    watchFetchList,
    watchSwitchLang
  };

  const forkedWatchers = Object.entries(allWatchers).map(([key, watcher]) => fork(watcher));
  yield all(forkedWatchers);
  
}