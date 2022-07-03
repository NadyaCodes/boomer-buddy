import React, {useState, useEffect} from 'react'
// import cookies from 'next-cookies'
// import { useRouter } from 'next/router'


// export default function Login(props) {
//   const [user, setUser] = useState("")
  
//   const router = useRouter()

//   // if (props.user) {
//   //   user = props.user;
//   // }

//   const handleChange = event => {
//     setUser(event.target.value);
//     console.log(event.target.value)
//   }

//   const handleClick = event => {
//     event.preventDefault()
//     setUser(event.target.value);
//     document.cookie = `user=${user}`;
//     router.reload(window.location.pathname)
//   }

//   const logOut = event => {
//     // event.preventDefault()
//     // setUser("")
//     document.cookie = `user=0`;
//     console.log(document.cookie)
//     console.log(window.location)
//     router.reload(window.location.pathname)
//   }



//   if ((typeof document !== "undefined") && (document.cookie === "user=0")) {
    
//     return(
//       <div>
//         <form action="/" method="post">
//           <label>User id:</label>
//           <input type="number" id="user" name="user" onChange={handleChange} value={user}/>
//           {/* <label for="password">Password:</label>
//           <input type="password" id="password" name="password" /> */}
//           <button onClick={handleClick} type="submit">Submit</button>
//         </form>
  
//       </div>
//     )
//   }
//   if ((typeof document === "undefined")) {
    
//     return(
//       <div>

  
//       </div>
//     )
//   }


// }



export default function Login() {
  const [loginError, setLoginError] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  // const router = useRouter()



  const handleClick = event => {
    event.preventDefault()
    setUser(event.target.value);
    setPassword(event.target.value);
    document.cookie = `user=${user}`;
    window.location.href = "/home";
    // router.reload(window.location.pathname)
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
