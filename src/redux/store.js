import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];
  const composedEnhancers = compose(...enhancers);
  const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : preloadedState;

  const store = createStore(rootReducer, persistedState, composedEnhancers);

  store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  });

  return store;
}
