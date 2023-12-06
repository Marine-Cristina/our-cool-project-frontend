import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AllBusiness() {
  const [business, setBusiness] = useState([]);

  const getAllBusiness = () => {
    axios
      .get(`${API_URL}/businesses`)
      .then((response) => setBusiness(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBusiness();
  }, []);

  return (
    <div>
      {business.map((business) => {
        return (
          <div key={business.id}>
            <Link to={`/businesses/${business.id}`}> </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBusiness;
