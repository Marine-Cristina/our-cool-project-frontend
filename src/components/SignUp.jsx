import axios from "axios";
import { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Form, Input, Flex } from "antd";
import { API_URL } from "../core/constants";
import { useStore } from "../context/Store";

const SignUp = ({ onCancel }) => {
  const [error, setError] = useState();
  const { updateAuthToken } = useStore();

  const handleSubmit = (values) => {
    axios
      .post(`${API_URL}/auth/signup`, {
        email: values.email,
        password: values.password,
        name: values.name,
      })
      .then((response) => {
        updateAuthToken(response.data.authToken);
        setError(false);
        onCancel();
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log("Error", error);
      });
  };

  return (
    <Flex vertical={true} gap="middle">
      {error !== undefined && (
        <Alert message="Error" description={error} type="error" showIcon />
      )}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name.",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            type="name"
            placeholder="User name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email.",
            },
          ]}
        >
          <Input prefix="@" placeholder="User email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password.",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Flex gap="small" justify="flex-end">
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
            <Button type="primary" ghost htmlType="cancel" onClick={onCancel}>
              Cancel
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default SignUp;
