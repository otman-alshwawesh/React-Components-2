import React from "react";
import nn from "../../image/nn.jpg"
import {Card} from 'react-bootstrap';
const ProfilePhoto = () => {
 return (
   <>
     <Card.Img variant="top" src={nn}  />
   </>
 );
};
export default ProfilePhoto;
