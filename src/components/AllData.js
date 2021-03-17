import React from "react";

const AllData = ({ firstName, lastName, email, contact }) => {
  return (
    <div>
      <div> first name of user <strong>{firstName}</strong></div>
      <br />
      <div>Last Name of user <strong>{lastName}</strong></div>
      <div>Your Email is <strong>{email} </strong> </div>
      <div>Your Contact Number is <strong>{contact}</strong> </div>
    </div>
  );
};

export default AllData;
