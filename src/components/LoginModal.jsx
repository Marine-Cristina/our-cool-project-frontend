import React, { useState } from "react";
import { Button, Modal, Tabs } from "antd";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginModal = ({ isOpen, onCancel }) => {
  const [activeTab, setActiveTab] = useState("login");

  const handleOnChange = (activeTab) => {
    setActiveTab(activeTab);
  };

  const items = [
    {
      key: "login",
      label: "Login",
      children: <Login onCancel={onCancel} />,
    },
    {
      key: "signup",
      label: "Sign up",
      children: <SignUp onCancel={onCancel} />,
    },
  ];

  return (
    <Modal open={isOpen} onCancel={onCancel} footer={null}>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={handleOnChange}
        activeKey={activeTab}
      />
    </Modal>
  );
};

export default LoginModal;
