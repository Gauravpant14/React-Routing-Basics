import React from 'react'

const Dashboard = ({location}) => {
    console.log(location);
    return (
        <div>
           <h1>welcome {location.state.firstName}</h1>
        </div>
    )
}

export default Dashboard
