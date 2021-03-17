import React,{useState} from "react";


const Signup = ({history}) => {
    const[fName,setFname] = useState()
    const[lName,setLname] = useState()
    const[email,setEmail] = useState()
    const[num,setNum] = useState()
    const dashboardInfo = (e) => {
        e.preventDefault();
    }
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

    const sendData = (e) => {
        history.push("./dashboard",{
            fName : {fName},
            lastName : {lName},
            email:{email},
            num:{num}
        })
    }

  return (
    <div>
      <form onSubmit={dashboardInfo}>
          <input type="text" placeholder="first-name" value={fName} onChange={changeFname}/>
          <input type="text" placeholder="last-name" value={lName} onChange={changeLname}/>
          <input type="text" placeholder="email" value={email} onChange={changeEmail}/>
          <input type="text" placeholder="Contact Number" value={num} onChange={changeNum}/>
        <button onClick={sendData}>Register</button>


      </form>
    </div>
  );
};

export default Signup;
