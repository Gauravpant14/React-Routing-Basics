import { render } from "@testing-library/react";
import React from "react";
import AllData from "./AllData";

const Dashboard2 = ({ location }) => {
  console.log(location.state.fName.fName);

  const fullDetails = () => {
    render(
      <AllData
        firstName={location.state.fName.fName}
        lastName={location.state.lName.lName}
        email={location.state.email.email}
        contact={location.state.num.num}
      />
    );
  };
  //   let userName = location.state.fName
  return (
    <div>
      <h1>Welcome {location.state.fName.fName} </h1>
      <h3>Click on given button to check the full info</h3>
      <button onClick={fullDetails}>Check full detail</button>
    </div>
  );
};

export default Dashboard2;
