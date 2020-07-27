import React, { useContext, useState } from "react";
import { Button, Form, Icon, Input, Segment, Table } from "semantic-ui-react";
import { CampaignContext } from "../contexts/campaign-context";

export default function CampaignTable() {
  const [state, dispatch] = useContext(CampaignContext);
  const [editing, setEditing] = useState(false);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();
  const [selectedName, setSelectedName] = useState();
  const [selectedText, setSelectedText] = useState();
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedSegmentId, setSelectedSegmentId] = useState();
  const [selectedMedia, setSelectedMedia] = useState();
  const [selectedStats, setSelectedStats] = useState();
  // const name = useFormInput("");
  // const text = useFormInput("");
  // const status = useFormInput("");
  // const segment_id = useFormInput("");
  // const media = useFormInput("");
  // const stats = useFormInput("");

  const delCampaign = (id) => {
    dispatch({
      type: "DEL_CAMPAIGN",
      payload: id,
    });
  };

  const onRemoveCampaign = () => {
    delCampaign(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = state.campaigns.map((campaign) => (
    <Table.Row
      key={campaign.id}
      onClick={() => {
        setSelectedId(campaign.id);
        setSelectedName(campaign.name);
        setSelectedText(campaign.text);
        setSelectedStatus(campaign.status);
        setSelectedSegmentId(campaign.segment_id);
        setSelectedMedia(campaign.media);
        setSelectedStats(campaign.stats);
      }}
      active={campaign.id === selectedId}
    >
      <Table.Cell>{campaign.id}</Table.Cell>
      <Table.Cell>{campaign.name}</Table.Cell>
    </Table.Row>
  ));

  const editCampaign = (id, name, text, status, segment_id, media, stats) => {
    dispatch({
      type: "EDIT_CAMPAIGN",
      payload: {
        id: id.value,
        name: name.value,
        text: text.value,
        status: status.value,
        segment_id: segment_id.value,
        media: media.value,
        stats: stats.value,
      },
    });
  };

  const onEditCampaign = () => {
    editCampaign(selectedId);
  };

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
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
      <h1>Selected Campaign Details</h1>
      <Form onSubmit={onEditCampaign}>
        <Form.Group widths="3">
          <Form.Field width={4}>
            <Input placeholder="Enter Name" value={selectedName} required />
          </Form.Field>
          <Form.Field width={4}>
            <Input
              placeholder="Enter Text"
              value={selectedText}
              type="text"
              required
            />
          </Form.Field>
          <Form.Field width={4}>
            <Input
              placeholder="Enter Status"
              value={selectedStatus}
              type="text"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="3">
          <Form.Field width={4}>
            <Input placeholder="Enter Segment ID" value={selectedSegmentId} />
          </Form.Field>
          <Form.Field width={4}>
            <Input
              placeholder="Enter Media"
              value={selectedMedia}
              type="text"
            />
          </Form.Field>
          <Form.Field width={4}>
            <Input
              placeholder="Enter Stats"
              value={selectedStats}
              type="text"
            />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              Update Campaign
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}
