import {
  Button,
  // Upload,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../context/Store";
import { API_URL } from "../core/constants";
import EventCard from "./EventCard";

const { TextArea } = Input;

const EventForm = () => {
  const navigate = useNavigate();
  const { authToken } = useStore();
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const isEditView = eventId !== undefined;
  const [loading, setLoading] = useState(isEditView);

  useEffect(() => {
    if (eventId !== undefined) {
      axios
        .get(`${API_URL}/events/${eventId}`)
        .then((response) => {
          setEventDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [eventId]);

  if (loading === true) {
    return "Loading";
  }

  const handleSubmit = (formValues) => {
    const eventPayload = { ...formValues };

    axios
      .post(`${API_URL}/events`, eventPayload, {
        headers: { authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        navigate(`/events/${response.data._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex gap={"middle"}>
      <EventCard eventDetails={eventDetails} loading={loading} />

      <Form
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={
          eventDetails === undefined
            ? {
                nameOfTheEvent: "",
                location: "",
                coordinates: [],
                date: "",
                price: 0,
                description: "",
                isPetFriendly: false,
                isChildFriendly: false,
                isEcoFriendly: false,
                isAccessibilityFriendly: false,
                isVeganFriendly: false,
                contact: "",
              }
            : { ...eventDetails }
        }
        onValuesChange={(changedValues, allValues) => {
          setEventDetails(allValues);
        }}
        onFinish={handleSubmit}
      >
        <h3>Tell the world about your event!</h3>
        <Form.Item label="Name" name="nameOfTheEvent">
          <Input placeholder="What's the name of your event?" />
        </Form.Item>
        <Form.Item label="Organizer" name="organizer">
          <Input value="Change this for business.name" disabled />
        </Form.Item>
        <Form.Item label="Location" name="location">
          <Select>
            <Select.Option value="Burgos">Burgos, Spain</Select.Option>
            <Select.Option value="Paris">Paris, France</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date" name="date">
          <Date />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber type="number" min={0} suffix="€" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={6} placeholder="Tell us about your event." />
        </Form.Item>
        <Flex justify="space-between" align="start">
          <Form.Item
            label="Pet-friendly"
            valuePropName="checked"
            name="isPetFriendly"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Child-friendly"
            valuePropName="checked"
            name="isChildFriendly"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Eco-friendly"
            valuePropName="checked"
            name="isEcoFriendly"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Vegan-friendly"
            valuePropName="checked"
            name="isVeganFriendly"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Accessible"
            valuePropName="checked"
            name="isAccessibilityFriendly"
          >
            <Switch />
          </Form.Item>
        </Flex>
        <Form.Item label="Contact info" name="contact">
          <Input />
        </Form.Item>
        {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Publish Event
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default EventForm;
