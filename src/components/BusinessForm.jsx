import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select, Switch, Flex } from "antd";
import { useStore } from "../context/Store";
import { API_URL, typeOfBusinessKeys } from "../core/constants";
import { getTypeOfBusiness } from "../utils/formatters";

const { TextArea } = Input;

function BusinessForm() {
  const navigate = useNavigate();
  const { authToken } = useStore();
  const { businessId } = useParams();
  const [businessDetails, setBusinessDetails] = useState();
  const isEditView = businessId !== undefined;
  const [loading, setLoading] = useState(isEditView);

  useEffect(() => {
    if (businessId !== undefined) {
      axios
        .get(`${API_URL}/businesses/${businessId}`)
        .then((response) => {
          setBusinessDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [businessId]);

  if (loading === true) {
    return "Loading";
  }

  const handleSubmit = (formValues) => {
    const businessPayload = { ...formValues };

    axios
      .post(`${API_URL}/businesses`, businessPayload, {
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
      <h2>TELL THE WORLD ABOUT YOUR BUSINESS</h2>
      <Form
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={
          businessDetails === undefined
            ? {
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
              }
            : { ...businessDetails }
        }
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
            label="Vegan-friendly"
            name="isVeganFriendly"
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

export default BusinessForm;
