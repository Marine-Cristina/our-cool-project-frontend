import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserIdFromAuth } from "../utils/authUtils";
import {
  Button,
  Form,
  Input,
  Select,
  Switch,
  // Upload,
  Flex,
} from "antd";
import { useStore } from "../context/Store";
import { typeOfBusinessKeys } from "../core/constants";
import { getTypeOfBusiness } from "../utils/formatters";

const { TextArea } = Input;

function CreateBusiness() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const { authToken } = useStore();

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
    const businessPayload = { ...formValues, owner: userId };

    axios
      .post("http://localhost:5005/businesses", businessPayload, {
        headers: { authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        navigate(`/businesses/${response.data._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>TELL US ABOUT YOUR BUSINESS</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={{
          name: "",
          location: "",
          coordinates: [],
          typeOfBusiness: "",
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
        <Form.Item label="Name" name="name">
          <Input placeholder="What's the name of your business?" />
        </Form.Item>

        <Form.Item label="Location" name="location">
          <Select>
            <Select.Option value="Burgos">Burgos, Spain</Select.Option>
            <Select.Option value="Paris">Paris, France</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Type of business" name="typeOfBusiness">
          <Select>
            {typeOfBusinessKeys.map((key) => {
              return (
                <Select.Option key={key} value={key}>
                  {getTypeOfBusiness(key)}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={6} placeholder="Tell us about your business." />
        </Form.Item>

        <Flex justify="space-between" align="start">
          <Form.Item
            label="Pet-friendly"
            name="isPetFriendly"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Child-friendly"
            name="isChildFriendly"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Eco-friendly"
            name="isEcoFriendly"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Accessible"
            name="isAccessibilityFriendly"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Vegan-friendly"
            name="isVeganFriendly"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Flex>

        <Form.Item label="Contact info" name="contact">
          <Input placeholder="example@example.com or +34 655 43 52 67" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="Submit">Publish Business</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateBusiness;
