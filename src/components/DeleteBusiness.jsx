import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function DeleteBusiness({ownerId}){
    const [deleteBusiness, setDeleteBusiness]=useState(); 
    const navigate = useNavigate(); 

    const handleDeleteBusiness = () => {
        axios
        .delete(`http://localhost:5173/businesses/${ownerId}`) 
       .then (()=>{
       console.log("Business deleted successfully")
       setDeleteBusiness(true)
       navigate(`/`); 
       })
       .catch((error)=> {
        console.log("Error Deleting Business"); 
       })
    }
   
    
    return (
       <button onClick={handleDeleteBusiness}> Delete Business </button>

    )
}

export default DeleteBusiness