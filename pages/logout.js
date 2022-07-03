import React, {useState, useEffect} from 'react'
import cookies from 'next-cookies';



export default function Logout() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = event => {
    event.preventDefault()
    setUser('');
    setPassword('');
    document.cookie = `user=`;
    window.location.href = "/";
  }

  return(
    <button onClick={handleClick}>Logout</button>
  )
}