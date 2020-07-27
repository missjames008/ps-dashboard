import React from "react";
import { Header, Segment } from "semantic-ui-react";
import CampaignForm from "../components/campaign-form";
import CampaignTable from "../components/campaign-table";
import { CampaignContextProvider } from "../contexts/campaign-context";

export default function CampaignView() {
  return (
    <CampaignContextProvider>
      <Segment basic>
        <Header as="h3">Campaigns</Header>
        <CampaignForm />
        <CampaignTable />
      </Segment>
    </CampaignContextProvider>
  );
}
