import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailsBusiness(){
   const [businessDetails, setBusinessDetails]= useState({}); 

   useEffect(()=>{
    axios
    .get("http://localhost:5005/detailsbusiness")
    .then (response => setBusinessDetails(response.data))
    .catch (error => conlonge.log(error)); 
   },[])

   return (

    <div>
        {businessDetails.name}
        {businessDetails.location}
        {businessDetails.coordinates}
        {businessDetails.typeOfBusiness}
        {businessDetails.isPetFriendly}
        {businessDetails.isChildFriendly}
        {businessDetails.isAccessibilityFriendly}
        {businessDetails.isVeganFriendly}
    </div>
   )
}

export default DetailsBusiness