import React, {useState, useEffect} from 'react'



export default function Logout() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = event => {
    event.preventDefault()
    setUser('');
    setPassword('');
    document.cookie = `user=`;
    window.location.href = "/";
    // router.reload(window.location.pathname)
  }

  return(
    <button onClick={handleClick}>Logout</button>
  )
}
// import cookies from 'next-cookies'
// import { useRouter } from 'next/router'



// export default function Logout(props) {
//   const [user, setUser] = useState("")
  
//   const router = useRouter()


//   const handleClick = event => {
//     document.cookie = `user=0`;
//     setUser("")
//     router.reload(window.location.pathname)
//   }


//   if ((typeof document !== "undefined") && (document.cookie === "user=0")) {
//     return(
//       <div>

//           <label>Logout</label>
//           <button onClick={handleClick} type="submit">Submit</button>
//       </div>
//     )
//   }

//   if (typeof document === "undefined") {
    
//     return(
//       <div>
//           <label>Logout</label>
//           <button onClick={handleClick} type="submit">Submit</button>
//       </div>
//     )
//   }

// }