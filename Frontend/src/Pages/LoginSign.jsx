import './Style/LoginSign.css'

const LoginSign = () => {
  return (
    <div className="login-sign-container">
      <div className="login-sign">
        <h1>Login Account</h1>
        <div className="login-sign-field">
          {/* <input type="text" placeholder="Name"/> <br /> */}
          <input type="text" placeholder="Email"/> <br />
          <input type="text" placeholder="Password"/> 
        </div>
        <div className="login-sign-text">
          <p>Crate an Account <span>Click Here</span></p>
        </div>
        <button>Login</button> 
      </div>    
    </div>
  )
}

export default LoginSign