import React, { useContext,useState } from 'react';
import './login.css'
import AuthContext from '../../context/AuthProvider';
import {useNavigate,useLocation} from 'react-router-dom'


function Login() {
  const {auth,setAuth} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/user"
  
  const showPass = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  // handle on Fetch API
  const handlfetch = (e) => { 
    fetch('http://localhost:8081/user/login',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password})
  }).then((response) => response.json())
  .then((data) => {
    console.log(data)
    console.log(from)
    let email = data.email
    let role = data.roles
    setAuth(
      {
        "email":email,
        "roles":role
      })
    navigate(from , {replace:true})
  });
  }

  // handle on Submit form
  const handleSubmit=(e)=>{                 
  e.preventDefault()
  handlfetch()
  } 

  return (
    <div className="App">
      <body>
        <form>
          <h3><strong>Login</strong></h3>
          <p className="faded">Enter Your Credentials to access your account.</p>
          <label className="lemail"> <strong>Email</strong></label>
          <input className="iemail" type="email" placeholder="Enter Your Email" id="username" required  onChange={(e)=>{setEmail(e.target.value)}}></input>
          <br></br>
          <label className="lpassword"><strong>password</strong></label>
          <div className='pwd'>
            <input className="ipassword" type="password" placeholder="Enter Your password" id="password" required onChange={(e)=>{setPassword(e.target.value)}}></input>
            <span className='p-viewer'>
              <i className='fa fa-eye' onClick={() => { showPass() }} id="eye" aria-hidden="true"></i>
            </span>
          </div>
          <div className="checkeepfor">
            <input className="checkbox" type="checkbox"></input> &nbsp;
            <label><strong>Keep me signed in</strong></label>
            <a className="forpass" href="http://localhost:3000/?">Forgot password</a>
          </div>
          <button onClick={handleSubmit} >Login</button> <br></br><br></br>

          <p className='donthvac'>Don't have an account? &nbsp;<span className='signup'>Sign Up</span></p>
        </form>
      </body>
    </div>
  )
}

export default Login;
