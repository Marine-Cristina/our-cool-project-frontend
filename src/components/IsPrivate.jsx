import { useStore } from "../context/Store";
import LoginModal from "./Authentication/LoginModal";
import { useState } from "react";

function IsPrivate({ children }) {
  const { isAuthenticated } = useStore();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const handleCancel = () => {
    setIsLoginModalOpen(false);
  };
  if (!isAuthenticated) {
    return <LoginModal isOpen={isLoginModalOpen} onCancel={handleCancel} />;
  } else {
    return children;
  }
}
export default IsPrivate;
