import { applyMiddleware, compose, Store, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";


export const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    APP_MODULE: string;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const store = legacy_createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
