import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import createStore from "./redux/createStore";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
