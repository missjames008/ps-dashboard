import React, { useContext, useState } from "react";
import { Button, Icon, Segment, Table } from "semantic-ui-react";
import { CampaignContext } from "../contexts/campaign-context";

export default function CampaignTable() {
  // Subscribe to `contacts` state and access dispatch function
  const [state, dispatch] = useContext(CampaignContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();
  const [editing, setEditing] = useState(false);

  const editCampaign = (id) => {
    dispatch({
      type: "EDIT_CAMPAIGN",
      payload: {
        id: id.value,
        name: name.value,
        text: text.value,
        status: text.status,
        segment_id: text.segment_id,
        media: text.media,
        stats: text.stats,
      },
    });
  };

  const onEditCampaign = () => {
    editCampaign(selectedId);
  };

  const rows = state.campaigns.map((campaign) => (
    <Table.Row
      key={campaign.id}
      onClick={() => setSelectedId(campaign.id)}
      active={campaign.id === selectedId}
    >
      <Table.Cell>{campaign.id}</Table.Cell>
      <Table.Cell>{campaign.name}</Table.Cell>
      {/* <Table.Cell>{campaign.email}</Table.Cell> */}
    </Table.Row>
  ));

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Text</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                onClick={onRemoveCampaign}
              >
                <Icon name="trash" /> Remove Campaign
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}
