
import React from "react";
import AllData from "./AllData";

const Dashboard2 = ({ history,location }) => {
  // console.log(location.state.fName);
  const mydata = JSON.parse(localStorage.getItem("mydata"))
  const UserName = mydata.fName;
  const fullDetails = () => {
      history.push("/myprofile")
      // fName :  location.state.fName,
      // lName :location.state.lName,
      // email :location.state.email,
      // num :location.state.num
  
  };
  //   let userName = location.state.fName
  return (
    <div>
      <h1>Welcome {UserName}  </h1>
      <h3>Click on given button to check the full info</h3>
      <button onClick={fullDetails}>Check full detail</button>
    </div>
  );
};

export default Dashboard2;
