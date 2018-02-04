import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createStore from "./redux/createStore";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
