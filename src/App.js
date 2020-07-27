import React from "react";
import { Container } from "semantic-ui-react";
// import CounterView from "./views/counter-view";
import CampaignView from "./views/campaign-view";
export default function App() {
  return (
    <Container>
      <h1>Campaigns Dashboard</h1>
      {/* <CounterView /> */}
      <CampaignView />
    </Container>
  );
}
