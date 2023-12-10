import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import UserMenuContent from "./UserMenuContent";

function UserMenu() {
  return (
    <Popover placement="bottomRight" content={UserMenuContent} trigger="click">
      <Avatar size="large" icon={<UserOutlined />} />
    </Popover>
  );
}

export default UserMenu;
