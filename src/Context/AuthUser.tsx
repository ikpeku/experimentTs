import { useContext } from 'react'
import { userContext } from './UserContext'

export const AuthUser = () => {

    const user = useContext(userContext)
    const handleLoggin = () => {
        user.setUser({
            name: "sam",
            email: "sam@g.com"
        })
    }

    const handleLoggout = () => {
        user.setUser(null)
    }


    return (
        <div>
            <button onClick={handleLoggin}>login</button>
            <button onClick={handleLoggout}>logout</button>
            {user && <h2>name: {user?.user?.name}</h2>}
            <p>email: {user?.user?.email}</p>
        </div>
    )
}

