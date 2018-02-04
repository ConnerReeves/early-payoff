import Immutable from "seamless-immutable";
import createModule from "../createModule";

export const counter = createModule("counter");
export const namespace = counter.namespace;

export const { decrement, increment } = counter.createActions({
  DECREMENT: null,
  INCREMENT: null
});

export const getCount = counter.createSelector("count");

export const reducer = counter.handleActions(
  {
    [decrement]: state => state.update("count", count => count - 1),
    [increment]: state => state.update("count", count => count + 1)
  },
  Immutable({ count: 0 })
);
