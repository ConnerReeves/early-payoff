import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { reducers } from "./modules";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({ diff: true, duration: true });
  middleware.push(logger);
}

const combinedReducers = combineReducers(reducers);

export default () =>
  createStore(combinedReducers, applyMiddleware(...middleware));
