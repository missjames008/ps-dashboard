import React, { Fragment } from "react";
import { Header, Segment } from "semantic-ui-react";
import CampaignForm from "../components/campaign-form";
import CampaignTable from "../components/campaign-table";
import { CampaignContextProvider } from "../contexts/campaign-context";
import { CampaignList } from "./campaign-list";

export const Home = () => {
  return (
    <Fragment>
      <div className="App">
        <div className="container mx-auto">
          <Segment basic>
            <h3>Campaign List </h3>
            <CampaignList />
          </Segment>
          <CampaignContextProvider>
            <Segment basic>
              <Header as="h3">Campaigns</Header>
              <CampaignForm />
              <CampaignTable />
            </Segment>
          </CampaignContextProvider>
        </div>
      </div>
    </Fragment>
  );
};
