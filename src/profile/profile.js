import React from "react";
import PropTypes from "prop-types";




const Profile = (props) => {
    return (
        <div>
        <span > FullName: {props.FullName}</span> <br/>
        {props.children} <br/>
        <span> Bio: {props.Bio}</span> <br/>
        <span> Profession: {props.Profession}</span>
        
        {props.fncAlert()}
        </div>
    );
   }
   Profile.propTypes={
       FullName: PropTypes.string,
       fncAlert :PropTypes.func,
       Bio:PropTypes.string,
       Profession:PropTypes.string,
   };
   Profile.defaultProps = {
       FullName:'test',
       Bio: "xyz"
    
   }
 
   export default Profile;
 

