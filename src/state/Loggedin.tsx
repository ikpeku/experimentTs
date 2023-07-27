import { useState } from 'react'

export const Loggedin = () => {
  const [login, setLogin] = useState(false)

  const handleLoggin = () => {
    setLogin(true)
  }
  const handleLoggout = () => {
    setLogin(false)
  }


  return (
    <div>
      <button onClick={handleLoggin}>login</button>
      <button onClick={handleLoggout}>logout</button>
      <h2>{login ? "user login " : "user is logout"}</h2>
    </div>
  )
}

