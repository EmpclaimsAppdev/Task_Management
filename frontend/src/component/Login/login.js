import React from 'react';
import './login.css'


function Login(){
    return(
        <div className="App">
      <body>

        <form>
          <h3><strong>Login</strong></h3>
          <p className="faded">Enter Your Credentials to access your account </p>
          <label className="lemail"> <strong>Email</strong></label>
          <input className="iemail" type="email" placeholder="Enter Your Email" id="username" required ></input> 
          <br></br>
          <label className="lpassword"><strong>password</strong></label>
          <input className="ipassword" type="password" placeholder="Enter Your password" id="password" required ></input>
          

          <div className="checkeepfor">
            <input className="checkbox" type="checkbox"></input> &nbsp;
            <label><strong>Keep me signed in</strong></label>
            <a className="forpass" href="http://localhost:3000/?">Forgot password</a>
          </div>
          <button>Login</button> <br></br><br></br>

          <p className='donthvac'>Don't have an account? &nbsp; <span className='signup' >Sign Up</span> </p>
        </form>
      </body>
    </div>
    )
}

export default Login;