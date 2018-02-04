import React from "react";
import { Route } from "react-router-dom";
import * as Routes from "../constants/Routes";
import LoanInformationPage from "./loan-information/LoanInformationPage";
import PayoffSchedulePage from "./payoff-schedule/PayoffSchedulePage";

const routes = [
  {
    path: Routes.LOAN_INFORMATION,
    component: LoanInformationPage
  },
  {
    path: Routes.PAYOFF_SCHEDULE,
    component: PayoffSchedulePage
  }
];

const AppRouter = () =>
  routes.map(({ component, path }) => (
    <Route component={component} exact key={path} path={path} />
  ));

export default AppRouter;
