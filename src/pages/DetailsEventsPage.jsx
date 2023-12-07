
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailsEvent(){
   const [eventDetails, seteventDetails]= useState({}); 

   useEffect(()=>{
    axios
    .get("http://localhost:5005/detailsevent")
    .then (response => setEventDetails(response.data))
    .catch (error => console.log(error)); 
   },[])

   return (

    <div>
        {eventDetails.name}
        {eventDetails.location}
        {eventDetails.coordinates}
        {eventDetails.typeOfBusiness}
        {eventDetails.isPetFriendly}
        {eventDetails.isChildFriendly}
        {eventDetails.isAccessibilityFriendly}
        {eventDetails.isVeganFriendly}
    </div>
   )
}

export default DetailsEvents