import React, {useState} from "react";

export default function Login() {

const[email, setEmail]=useState('')
const[password, setPassword]=useState('')
const[LoggedIn, setLoggedIn]=useState(false)

const handleEmailInput=(event)=>{
  setEmail(event.target.value)
}

const handlePasswordInput=(event)=>{
  setPassword(event.target.value)
}

const handleSearchInput=(event)=>{
  setSearch(event.target.value)
};


function handleLoggedin(event){
  
  event.preventDefault();
  if (email==="betty@gmail.com" && password==="1234"){
    setLoggedIn(true)
  }
}

function handleLogout(event){
  event.preventDefault();
  setLoggedIn(false)
}

  return (

    <div>
    {
      
      LoggedIn
      ?
      
      <>
      
    
      <h3>Go ahead and search for prefered city temperature!</h3>
      
      <button onClick={handleLogout}>Logout</button>
      
      </>
      :

      <>
      <form>
      <h1>Welcome to My blog App</h1>
      <h2>Already have an account <br></br>Please Login here</h2>
      <label>Email</label>
      <input type="text" placeholder="enter email" value={email} onChange={handleEmailInput}/><br></br>
      <label>Password</label>
      <input type="password" placeholder="enter password" value={password} onChange={handlePasswordInput}/>
      <button style={{color:"blue", backgroundColor:"white"}} onClick= {handleLoggedin}>Login</button>
      </form>
      </>
      }
    </div>
  )
}