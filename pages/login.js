const users = {
  1: {name: "User1", password: 1234},
  2: {name: "User2", password: 1234},
  3: {name: "User3", password: 1234}
}

export default function Login() {
  return(
    <div>
      <form action="/send-data-here" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}