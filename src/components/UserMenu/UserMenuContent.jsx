import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useStore } from "../../context/Store";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../core/constants";

function UserMenuContent() {
  const { isAuthenticated, removeAuthToken } = useStore();
  const navigate = useNavigate();

  return (
    <Menu
      onClick={({ key }) => {
        if (key === "login-link") {
          navigate(APP_ROUTES.LOGIN);
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
  );
}

export default UserMenuContent;
