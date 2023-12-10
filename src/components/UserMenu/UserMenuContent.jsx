import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useStore } from "../../context/Store";
import { Menu } from "antd";
import LoginModal from "../LoginModal";
import { useState } from "react";

function UserMenuContent() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, removeAuthToken } = useStore();

  const handleCancel = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <Menu
        onClick={({ key }) => {
          if (key === "login-link") {
            setIsLoginModalOpen(true);
          } else if (key === "logout-link") {
            removeAuthToken();
          }
        }}
        items={[
          isAuthenticated === false
            ? {
                key: "login-link",
                icon: <UserOutlined />,
                label: "Login",
              }
            : {
                key: "logout-link",
                icon: <LogoutOutlined />,
                label: "Logout",
              },
        ]}
      />
      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onCancel={handleCancel} />
      )}
    </>
  );
}

export default UserMenuContent;
