import React from "react";
import { Container } from "semantic-ui-react";
import CampaignView from "./views/campaign-view";
export default function App() {
  return (
    <Container>
      <h1>PS Campaigns Dashboard</h1>
      <CampaignView />
    </Container>
  );
}
