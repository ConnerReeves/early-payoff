import * as ReduxActions from "redux-actions";
import * as Reselect from "reselect";

export default function createModule(namespace) {
  function createActions(actions) {
    return ReduxActions.createActions({
      [namespace]: actions
    })[namespace];
  }

  function createSelector(selector) {
    return Reselect.createSelector(
      state => state[namespace],
      typeof selector === "string" ? state => state[selector] : selector
    );
  }

  function handleActions(handledActions, initialState) {
    return ReduxActions.handleActions(handledActions, initialState);
  }

  return {
    createActions,
    createSelector,
    handleActions,
    namespace
  };
}
