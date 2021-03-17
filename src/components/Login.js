import React,{useState} from 'react'

const Login = ({history}) => {
    const[name,setName] = useState()
   
    const dashBoardFun =() => {      
        history.push("./dashboard",{
            fName:name
        })
    }

    const getName = (e) =>{
        setName(e.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={getName}/>
            <input type="password" />
            <button onClick={dashBoardFun}>Login</button>
        </div>
    )
}

export default Login
