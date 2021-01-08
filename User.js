import React, { useState } from "react";

export default function Login() {
  let url="https://docs.google.com/forms/d/1zmssGywfo5KUmj4qvXqJXj9VjE75GjHH_GMgOyXnqeo/edit#responses";
  const [pharmacyName, setPharmacyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [SignedUp, setSignedUp] = useState(false);

  const handlePharmacyNameInput = (event) => {
    setPharmacyName(event.target.value);
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleRepeatpasswordInput = (event) => {
    setRepeatpassword(event.target.value);
  };

  function handleSignedUp(event) {
    event.preventDefault();
    if (email === "betty@gmail.com" && password === "1234") {
      setSignedUp(true);
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    setSignedUp(false);
  }
  
  return (
    <div>
      {SignedUp ? (
        <>
          <button onClick={handleLogin}>Login</button>
          <div className="App">
            
      <button>
     <a href={url}>click here to access request from customers</a></button>
     
    </div>
        </>
      ) : (
        <>
        <h2>SignUp as a pharmacy to recieve orders from customers</h2>
          <form>
            <label>Pharmacy Name</label>
            <input
              type="text"
              placeholder="enter PharmacyName"
              value={pharmacyName}
              onChange={handlePharmacyNameInput}
            />
            <br></br>
            <label>email</label>
            <input
              type="email"
              placeholder="enter email"
              value={email}
              onChange={handleEmailInput}
            />
            <label>password</label>
            <input
              type="password"
              placeholder="enter password"
              value={password}
              onChange={handlePasswordInput}
            />
            <br></br>
            <label>Repeatpassword</label>
            <input
              type="password"
              placeholder="repeatpassword"
              value={repeatpassword}
              onChange={handleRepeatpasswordInput}
            />
            <button
              style={{ color: "blue", backgroundColor: "white" }}
              onClick={handleSignedUp}
            >
              SignUp
            </button>
          </form>
        </>
      )}
    </div>
  );
}
