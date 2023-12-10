import axios from "axios";
import { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Form, Input, Flex } from "antd";
import { API_URL } from "../core/constants";
import { useStore } from "../context/Store";

const Login = () => {
  const [error, setError] = useState(false);
  const { updateAuthToken } = useStore();

  const handleSubmit = (values) => {
    axios
      .post(`${API_URL}/auth/login`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        updateAuthToken(response.data.authToken);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  };

  return (
    <Flex vertical={true} gap="middle">
      {error === true && (
        <Alert
          message="Error"
          description="Email or password is incorrect."
          type="error"
          showIcon
        />
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
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email.",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="User email"
          />
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default Login;
