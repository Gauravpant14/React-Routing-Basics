import React from 'react'

const Myprofile = ({location}) => {
    console.log(location);
    return (
        <div>
            
             <input type="text" placeholder="first-name" value={location.state.fName }/>
          <input type="text" placeholder="last-name" value={location.state.lName} />
          <input type="text" placeholder="email" value={location.state.email} />
          <input type="text" placeholder="Contact Number" value={location.state.num}/>
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
