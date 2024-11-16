import React, { useState } from 'react';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const { id, value } = event.target;
    // if (id === 'email') {
    //   setEmail(value);
    // } else if (id === 'password') {
    //   setPassword(value);
    // }
     console.log("email:-"+email,"password:-"+password);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8 ) {
        setError('Password must be at least 8 characters long.');
        return;
      }

      setError('');
    alert('succesfullt login done')
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">EMAIL</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleChange} 
          className="control"
        />
        
        <label htmlFor="password">PASSWORD</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={handleChange} 
          className="control"
        />
         {error && <div className="control-error">{error}</div>}
        <div className="form-actions">
          <button type="button" onClick={handleReset} className="button button-flat">Reset</button>
          <button type="submit" className="button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
