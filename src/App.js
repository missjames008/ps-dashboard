import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AddCampaign } from "./components/add-campaign";
import { EditCampaign } from "./components/edit-campaign";
import { Home } from "./components/home";
import { GlobalProvider } from "./contexts/global-state";

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddCampaign} exact />
          <Route path="/edit/:id" component={EditCampaign} exact />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}
