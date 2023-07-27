import { useState } from 'react'

interface AuthUser {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLoggin = () => {
        setUser({
            name: "ola",
            email: "ola@g.ccom"
        })

    }
    const handleLoggout = () => {
        setUser(null)
    }


    return (
        <div>
            <button onClick={handleLoggin}>login</button>
            <button onClick={handleLoggout}>logout</button>
            {
                user && (
                    <>
                        <h2>userName: {user?.name}</h2>
                        <h2>email: {user?.email}</h2>
                    </>
                )
            }
        </div>
    )
}
