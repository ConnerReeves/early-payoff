import Immutable from "seamless-immutable";
import createModule from "../createModule";

export const navigation = createModule("navigation");
export const namespace = navigation.namespace;

export const { hideNavigation, showNavigation } = navigation.createActions({
  HIDE_NAVIGATION: null,
  SHOW_NAVIGATION: null
});

export const getIsOpen = navigation.createSelector("isOpen");

export const reducer = navigation.handleActions(
  {
    [hideNavigation]: state => state.set("isOpen", false),
    [showNavigation]: state => state.set("isOpen", true)
  },
  Immutable({ isOpen: true })
);
