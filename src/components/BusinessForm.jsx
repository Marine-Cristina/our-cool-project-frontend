import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select, Switch, Flex } from "antd";
import { useStore } from "../context/Store";
import { API_URL, typeOfBusinessKeys } from "../core/constants";
import { getTypeOfBusiness } from "../utils/formatters";
import BusinessCard from "./BusinessCard";
import CountryFilter from "./Filters/CountryFilter";
import StateFilter from "./Filters/StateFilter";

const { TextArea } = Input;

function BusinessForm() {
  const navigate = useNavigate();
  const { authToken } = useStore();
  const { businessId } = useParams();
  const [businessDetails, setBusinessDetails] = useState();
  const isEditView = businessId !== undefined;
  const [loading, setLoading] = useState(isEditView);
  const [form] = Form.useForm();

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
        console.error("Error during form submission:", error);
      });
  };

  console.log({ cid: form.getFieldValue("country")?.id });

  return (
    <Flex gap={"middle"}>
      <BusinessCard businessDetails={businessDetails} loading={loading} />

      <Form
        form={form}
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={
          businessDetails === undefined
            ? {
                name: "",
                country: {},
                state: {},
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
        onValuesChange={(changedValues, allValues) => {
          setBusinessDetails(allValues);
        }}
        onFinish={handleSubmit}
      >
        <h3>Tell the world about your business!</h3>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please introduce the name of your business.",
            },
          ]}
        >
          <Input placeholder="What's the name of your business?" />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[
            {
              required: true,
              message: "Please introduce a country.",
            },
          ]}
        >
          <CountryFilter
            value={
              form.getFieldValue("country")
                ? form.getFieldValue("country").iso2
                : undefined
            }
          />
        </Form.Item>

        <Form.Item
          label="City"
          name="state"
          rules={[
            {
              required: true,
              message: "Please introduce a city.",
            },
          ]}
        >
          <StateFilter
            value={form.getFieldValue("state")}
            countryId={form.getFieldValue("country")?.listIdx}
          />
        </Form.Item>

        {/* <Form.Item label="Location" name="location">
          <Select>
            <Select.Option value="Burgos">Burgos, Spain</Select.Option>
            <Select.Option value="Paris">Paris, France</Select.Option>
          </Select>
        </Form.Item> */}
        <Form.Item
          label="Type of business"
          name="typeOfBusiness"
          rules={[
            {
              required: true,
              message: "Please choose a type.",
            },
          ]}
        >
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
            label="Accessibility-Friendly"
            name="isAccessibilityFriendly"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Flex>

        <Form.Item
          label="Contact info"
          name="contact"
          rules={[
            {
              required: true,
              message: "Please introduce contact info.",
            },
          ]}
        >
          <Input placeholder="example@example.com or +34 655 43 52 67" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="Submit">Publish Business</Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default BusinessForm;
