import _ from "lodash";
import React, { useContext, useState } from "react";
import { Button, Form, Input, Segment } from "semantic-ui-react";
import { CampaignContext } from "../contexts/campaign-context";

export default function CampaignForm() {
  const name = useFormInput("");
  const text = useFormInput("");
  const status = useFormInput("");
  const segment_id = useFormInput("");
  const media = useFormInput("");
  const stats = useFormInput("");

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(CampaignContext);

  const onSubmit = () => {
    dispatch({
      type: "ADD_CAMPAIGN",
      payload: {
        id: _.uniqueId(10),
        name: name.value,
        text: text.value,
        status: status.value,
        segment_id: segment_id.value,
        media: media.value,
        stats: stats.value,
      },
    });
    // Reset Form
    name.onReset();
    text.onReset();
    status.onReset();
    segment_id.onReset();
    media.onReset();
    stats.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={4}>
            <Input placeholder="Enter Name" {...name} required />
          </Form.Field>
          <Form.Field width={4}>
            <Input placeholder="Enter Text" {...text} type="text" required />
          </Form.Field>
          <Form.Field width={4}>
            <Input placeholder="Enter Status" {...status} type="text" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="3">
          <Form.Field width={4}>
            <Input placeholder="Enter Segment ID" {...segment_id} />
          </Form.Field>
          <Form.Field width={4}>
            <Input placeholder="Enter Media" {...media} type="text" />
          </Form.Field>
          <Form.Field width={4}>
            <Input placeholder="Enter Stats" {...stats} type="text" />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Campaign
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
}
