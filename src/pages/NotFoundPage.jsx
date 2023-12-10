import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>PAGE NOT FOUND</h1>
      <Button onClick={handleOnClick}>Back</Button>
    </>
  );
}

export default NotFoundPage;
