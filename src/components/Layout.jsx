import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  BoldOutlined,
  ScheduleOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
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
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../core/constants";
import { useStore } from "../context/Store";
import UserMenu from "./UserMenu/UserMenu";

const { Header, Sider, Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, removeAuthToken } = useStore();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Flex
          vertical={false}
          gap="small"
          align="center"
          justify="center"
          style={{ margin: "10px" }}
        >
          <Image height={40} src={Logo} />
          {!collapsed && (
            <Typography.Title
              level={1}
              style={{ fontSize: "20px", color: "white" }}
            >
              Spherendly
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
            } else if (key === "create-business-link") {
              navigate(APP_ROUTES.NEW_BUSINESS);
            } else if (key === "create-event-link") {
              navigate(APP_ROUTES.NEW_EVENT);
            } else if (key === "login-link") {
              navigate(APP_ROUTES.LOGIN);
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
            {
              key: "login-link",
              icon: <UserOutlined />,
              label: "Login",
            },
            {
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
            margin: "20px 20px",
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Spherendly ©2023 Created by Marine & Cristina
        </Footer>
      </AntLayout>
    </AntLayout>
  );
};
export default Layout;
