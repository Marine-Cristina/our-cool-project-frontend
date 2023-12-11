import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserIdFromAuth } from "../utils/authUtils";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  // Upload,
  Flex,
} from "antd";
import { API_URL } from "../core/constants";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CreateEvent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await getUserIdFromAuth();
        setUserId(userId);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  const handleSubmit = (formValues) => {
    const eventPayload = { ...formValues, organizer: userId };

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
    <>
      <h2>TELL US ABOUT YOUR EVENT</h2>
      <Form
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={{
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
        }}
        onFinish={handleSubmit}
      >
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
          <RangePicker />
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
          <Button onClick={() => navigate("/events")}>Publish Event</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateEvent;
