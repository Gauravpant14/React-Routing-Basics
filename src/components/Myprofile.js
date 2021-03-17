import React from 'react'

const Myprofile = ({location}) => {
    console.log(location);
    return (
        <div>
             <div>
      <div> first name of user <strong>{location.state.fName }</strong></div>
      <br />
      <div>Last Name of user <strong>{location.state.lName}</strong></div>
      <div>Your Email is <strong>{location.state.email} </strong> </div>
      <div>Your Contact Number is <strong>{location.state.num}</strong> </div>
    </div>
        </div>
    )
}

export default Myprofile
