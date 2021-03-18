import React from 'react'

const Myprofile = ({history}) => {
    const allUserData = JSON.parse(localStorage.getItem("mydata"))
    console.log( allUserData);
    const firstName = allUserData.fName;
    const lastName = allUserData.lName;
    const email = allUserData.email;
    const number = allUserData.num; 

    const logOut = () => {
        localStorage.clear();
        history.push("./")
    }

    return (
        <div>
        <label htmlFor="fname">First Name :</label>   
         <input type="text" placeholder="first-name" value={firstName} id="fname"/>
         <label htmlFor="fname">Last Name :</label>  
          <input type="text" placeholder="last-name" value={lastName} id="lname"/>
          <label htmlFor="fname">Email  :</label>  
          <input type="text" placeholder="email" value={email} id="email"/>
          <label htmlFor="fname">Contact :</label>  
          <input type="text" placeholder="Contact Number" value={number} id="contact"/>
          <button onClick={logOut}>Log Out</button>
             {/* <div>
      <div> first name of user <strong>{location.state.fName }</strong></div>
      <br />
      <div>Last Name of user <strong>{location.state.lName}</strong></div>
      <div>Your Email is <strong>{location.state.email} </strong> </div>
      <div>Your Contact Number is <strong>{location.state.num}</strong> </div> */}
    </div>
        
    )
}

export default Myprofile
