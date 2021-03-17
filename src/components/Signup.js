import React,{useState} from "react";


const Signup = ({history}) => {
    const[fName,setFname] = useState()
    const[lName,setLname] = useState()
    const[email,setEmail] = useState()
    const[num,setNum] = useState()
    
    const changeFname = (e) => {
        setFname(e.target.value);
    }
    const changeLname = (e) => {
        setLname(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeNum = (e) => {
        setNum(e.target.value)
    }

    const sendData = () => {
        history.push("./dashboard2",{
            fName : fName,
            lName : lName,
            email:email,
            num:num
        })
    }

  return (
    <div>
      
          <input type="text" placeholder="first-name" value={fName} onChange={changeFname}/>
          <input type="text" placeholder="last-name" value={lName} onChange={changeLname}/>
          <input type="text" placeholder="email" value={email} onChange={changeEmail}/>
          <input type="text" placeholder="Contact Number" value={num} onChange={changeNum}/>
             <button onClick={sendData}>Register</button>


     
    </div>
  );
};

export default Signup;
