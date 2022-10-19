
import React from 'react';
import './login.css'


function Login() {

  const showPass = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="App">
      <body>
        <form>
          <h3><strong>Login</strong></h3>
          <p className="faded">Enter Your Credentials to access your account.</p>
          <label className="lemail"> <strong>Email</strong></label>
          <input className="iemail" type="email" placeholder="Enter Your Email" id="username" required ></input>
          <br></br>
          <label className="lpassword"><strong>password</strong></label>
          <div className='pwd'>
            <input className="ipassword" type="password" placeholder="Enter Your password" id="password" required ></input>
            <span className='p-viewer'>
              <i className='fa fa-eye' onClick={() => { showPass() }} id="eye" aria-hidden="true"></i>
            </span>
          </div>
          <div className="checkeepfor">
            <input className="checkbox" type="checkbox"></input> &nbsp;
            <label><strong>Keep me signed in</strong></label>
            <a className="forpass" href="http://localhost:3000/?">Forgot password</a>
          </div>
          <button>Login</button> <br></br><br></br>

          <p className='donthvac'>Don't have an account? &nbsp;<span className='signup'>Sign Up</span></p>
        </form>
      </body>
    </div>
  )
}

export default Login;
=======
import React from 'react';
import './login.css'


function Login() {

  const showPass = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="App">
      <body>
        <form>
          <h3><strong>Login</strong></h3>
          <p className="faded">Enter Your Credentials to access your account.</p>
          <label className="lemail"> <strong>Email</strong></label>
          <input className="iemail" type="email" placeholder="Enter Your Email" id="username" required ></input>
          <br></br>
          <label className="lpassword"><strong>password</strong></label>
          <div className='pwd'>
            <input className="ipassword" type="password" placeholder="Enter Your password" id="password" required ></input>
            <span className='p-viewer'>
              <i className='fa fa-eye' onClick={() => { showPass() }} id="eye" aria-hidden="true"></i>
            </span>
          </div>
          <div className="checkeepfor">
            <input className="checkbox" type="checkbox"></input> &nbsp;
            <label><strong>Keep me signed in</strong></label>
            <a className="forpass" href="http://localhost:3000/?">Forgot password</a>
          </div>
          <button>Login</button> <br></br><br></br>

          <p className='donthvac'>Don't have an account? &nbsp;<span className='signup'>Sign Up</span></p>
        </form>
      </body>
    </div>
  )
}

export default Login;
