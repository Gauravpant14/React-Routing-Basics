import React from 'react'

const LandingPage = ({history,location}) => {
    const loginPage = () => {
        history.push('/login')
    }
    const signUpPage = () => {
        history.push('/signup')
    }
    return (
        <div>
           <button onClick={signUpPage}>Signup</button> 
           <button onClick={loginPage}>Login</button>
           <button onClick={loginPage}>Already have an account</button>
           <button onClick={signUpPage}>Don't have an account</button>
        </div>
    )
}

export default LandingPage
