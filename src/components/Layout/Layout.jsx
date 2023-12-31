import React, { useState } from "react";
import OrgLogo from "/orglogo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  BoldOutlined,
  ScheduleOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import {
  Layout as AntLayout,
  Menu,
  Button,
  theme,
  Typography,
  Image,
  Flex,
} from "antd";
import Logo from "/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../core/constants";
import { useStore } from "../../context/Store";
import UserMenu from "../UserMenu/UserMenu";
import LoginModal from "../Authentication/LoginModal";

const { Header, Sider, Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, removeAuthToken } = useStore();
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCancel = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <AntLayout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Flex
            vertical={false}
            gap="small"
            align="center"
            justify="center"
            style={{ margin: "10px" }}
          >
            <NavLink to={`${APP_ROUTES.ABOUT}`}>
              <Image preview={false} height={40} src={Logo} />
            </NavLink>
            {!collapsed && (
              <Typography.Title
                level={1}
                style={{ fontSize: "20px", color: "white" }}
              >
                Sphierndly
              </Typography.Title>
            )}
          </Flex>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={({ key }) => {
              if (key === "home-link") {
                navigate(APP_ROUTES.ROOT);
              } else if (key === "businesses-link") {
                navigate(APP_ROUTES.BUSINESSES);
              } else if (key === "events-link") {
                navigate(APP_ROUTES.EVENTS);
              } else if (key === "about-link") {
                navigate(APP_ROUTES.ABOUT);
              } else if (key === "create-business-link") {
                navigate(APP_ROUTES.NEW_BUSINESS);
              } else if (key === "create-event-link") {
                navigate(APP_ROUTES.NEW_EVENT);
              } else if (key === "login-link") {
                setIsLoginModalOpen(true);
              } else if (key === "logout-link") {
                removeAuthToken();
              }
            }}
            items={[
              {
                key: "home-link",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "businesses-link",
                icon: <BoldOutlined />,
                label: "Businesses",
              },
              {
                key: "events-link",
                icon: <ScheduleOutlined />,
                label: "Events",
              },
              {
                key: "about-link",
                icon: <DesktopOutlined />,
                label: "About us",
              },
              isAuthenticated === true
                ? {
                    key: "create-business-link",
                    icon: <PlusCircleOutlined />,
                    label: "New Business",
                  }
                : undefined,
              isAuthenticated === true
                ? {
                    key: "create-event-link",
                    icon: <PlusCircleOutlined />,
                    label: "New Event",
                  }
                : undefined,
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
        </Sider>
        <AntLayout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Flex
              align="center"
              justify="space-between"
              style={{ marginRight: "20px" }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <UserMenu />
            </Flex>
          </Header>
          <Content
            style={{
              margin: "20px 20px 1px",
              padding: 10,
              overflow: "auto",
            }}
          >
            {children}
          </Content>
          <Footer
            style={{
              textAlign: "center",

              padding: "0px",
            }}
          >
            Spherendly © 2023 Created by Marine & Cristina
            <NavLink to={`${APP_ROUTES.ABOUT}`}>
              <Image
                preview={false}
                src={OrgLogo}
                alt="organisation logo"
                height={"60px"}
                width={"60px"}
              />
            </NavLink>
          </Footer>
        </AntLayout>
      </AntLayout>

      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onCancel={handleCancel} />
      )}
    </>
  );
};
export default Layout;
