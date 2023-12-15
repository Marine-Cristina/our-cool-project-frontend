import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Upload, Form, Input, Select, Switch, Flex } from "antd";
import { useStore } from "../context/Store";
import { API_URL, typeOfBusinessKeys } from "../core/constants";
import { getTypeOfBusiness } from "../utils/formatters";
import BusinessCard from "./BusinessCard";
import CountryFilter from "./Filters/CountryFilter";
import StateFilter from "./Filters/StateFilter";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function BusinessForm() {
  const navigate = useNavigate();
  const { authToken } = useStore();
  const { businessId } = useParams();
  const [businessDetails, setBusinessDetails] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const isEditView = businessId !== undefined;
  const [loading, setLoading] = useState(isEditView);
  const [form] = Form.useForm();

  useEffect(() => {
    if (businessId !== undefined) {
      axios
        .get(`${API_URL}/businesses/${businessId}`)
        .then((response) => {
          setBusinessDetails(response.data);
          setSelectedCountry(response.data.country);
          setSelectedState(response.data.state);
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

  const handleUpload = async (formValues) => {
    try {
      if (formValues.upload && formValues.upload.fileList.length > 0) {
        const formData = new FormData();
        formData.append(
          "imageUrl",
          formValues.upload.fileList[0].originFileObj
        );
        const image = await axios.post(
          `${API_URL}/businesses/upload`,
          formData
        );
        handleSubmit(image.data.fileUrl, formValues);
      } else {
        handleSubmit("", formValues);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (image, formValues) => {
    const businessPayload = {
      ...formValues,
      imageURL: image,
      country: selectedCountry,
      state: selectedState,
    };

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

  return (
    <Flex gap={"middle"} className="edit-view">
      <Form
        form={form}
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={
          businessDetails === undefined
            ? {
                name: "",
                country: "",
                state: "",
                coordinates: [],
                typeOfBusiness: "",
                description: "",
                isPetFriendly: false,
                isChildFriendly: false,
                isEcoFriendly: false,
                isAccessibilityFriendly: false,
                isVeganFriendly: false,
                contact: "",
                imageURL: "",
              }
            : {
                ...businessDetails,
                country: businessDetails.country.iso2,
                state: businessDetails.state.state_code,
              }
        }
        onFinish={handleUpload}
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
          name="upload"
          label="Upload"
          valuePropName="im"
          extra="Choose a cool image for your business."
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[
            {
              required: true,
              message: "Please introduce a country",
            },
          ]}
        >
          <CountryFilter
            onChange={(value, option) => {
              const country = option?.raw;

              if (country) {
                setSelectedCountry({
                  listIdx: country.id,
                  name: country.name,
                  iso2: country.iso2,
                });
              } else {
                setSelectedCountry();
              }
            }}
            onClear={() => {
              setSelectedCountry();
            }}
          />
        </Form.Item>

        <Form.Item
          label="City"
          name="state"
          rules={[
            {
              required: true,
              message: "Please introduce a city",
            },
          ]}
        >
          <StateFilter
            countryId={selectedCountry?.listIdx}
            onChange={(value, option) => {
              const state = option?.raw;

              if (state) {
                setSelectedState({
                  name: state.name,
                  state_code: state.state_code,
                });
              } else {
                setSelectedState();
              }
            }}
            onClear={() => {
              setSelectedState();
            }}
          />
        </Form.Item>
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
      <BusinessCard
        businessDetails={{
          ...businessDetails,
          country: selectedCountry,
          state: selectedState,
        }}
        loading={loading}
      />
    </Flex>
  );
}

export default BusinessForm;
