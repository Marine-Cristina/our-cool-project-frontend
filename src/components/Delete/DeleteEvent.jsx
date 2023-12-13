import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL, APP_ROUTES } from "../../core/constants";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteEvent({ eventId }) {
  const navigate = useNavigate();

  const handleDeleteEvent = () => {
    axios
      .delete(`${API_URL}/events/${eventId}`)
      .then(() => {
        console.log("Event deleted successfully");
        navigate(`${APP_ROUTES.EVENTS}`);
      })
      .catch((error) => {
        console.log("Error Deleting Event");
      });
  };

  return (
    <Popconfirm
      title="Delete the event"
      description="Are you sure to delete this event?"
      onConfirm={handleDeleteEvent}
      okText="Delete"
      cancelText="Cancel"
      okButtonProps={{ danger: true }}
    >
      <Button type="text" icon={<DeleteOutlined key="delete" />} />
    </Popconfirm>
  );
}

export default DeleteEvent;
