import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../core/constants";

function DeleteBusiness({ ownerId }) {
  const [deleteBusiness, setDeleteBusiness] = useState();
  const navigate = useNavigate();

  const handleDeleteBusiness = () => {
    axios
      .delete(`${API_URL}/businesses/${ownerId}`)
      .then(() => {
        console.log("Business deleted successfully");
        setDeleteBusiness(true);
        navigate(`/`);
      })
      .catch((error) => {
        console.log("Error Deleting Business");
      });
  };

  return <button onClick={handleDeleteBusiness}> Delete Business </button>;
}

export default DeleteBusiness;
