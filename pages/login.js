import React, {useState, useEffect} from 'react'
import cookies from 'next-cookies';


export default function Login() {
  const [loginError, setLoginError] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  



  const handleClick = event => {
    event.preventDefault()
    setUser(event.target.value);
    setPassword(event.target.value);
    document.cookie = `user=${user}`;
    window.location.href = `/home?user=${user}`;
  }

    
    return(
      <div>
        <form action="./api/users" method="post">
          <label htmlFor="user">Username:</label>
          <input type="text" id="user" name="user" onChange={(e) => setUser(e.target.value)} value={user}/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          <button onClick={handleClick} type="submit">Submit</button>
        </form>
  
      </div>
    )
}
