import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL, APP_ROUTES } from "../../core/constants";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteBusiness({ businessId }) {
  const navigate = useNavigate();

  const handleDeleteBusiness = () => {
    axios
      .delete(`${API_URL}/businesses/${businessId}`)
      .then(() => {
        console.log("Business deleted successfully");
        navigate(`${APP_ROUTES.BUSINESSES}`);
      })
      .catch((error) => {
        console.log("Error Deleting Business");
      });
  };

  return (
    <Popconfirm
      title="Delete the business"
      description="Are you sure to delete this business?"
      onConfirm={handleDeleteBusiness}
      okText="Delete"
      cancelText="Cancel"
      okButtonProps={{ danger: true }}
    >
      <Button type="text" icon={<DeleteOutlined key="delete" />} />
    </Popconfirm>
  );
}

export default DeleteBusiness;
