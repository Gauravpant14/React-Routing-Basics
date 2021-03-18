import React, { useState } from "react";

const Signup = ({ history }) => {
  const [fName, setFname] = useState();
  const [lName, setLname] = useState();
  const [email, setEmail] = useState();
  const [num, setNum] = useState();

  const changeFname = (e) => {
    setFname(e.target.value);
  };
  const changeLname = (e) => {
    setLname(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeNum = (e) => {
    setNum(e.target.value);
  };

  const sendData = () => {
    localStorage.setItem("mydata",JSON.stringify({
      fName: fName,
      lName: lName,
      email: email,
      num: num,
    }) );
   history.push("./dashboard2");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first-name"
          value={fName}
          onChange={changeFname}
          className="check"
        />
        <input
          type="text"
          placeholder="last-name"
          value={lName}
          onChange={changeLname}
          className="check"
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={changeEmail}
          className="check"
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={num}
          onChange={changeNum}
          className="check"
        />
        <button
          disabled={!fName || !lName || !email || !num}
          onClick={sendData}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
