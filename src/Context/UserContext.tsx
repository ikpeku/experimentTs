import { createContext, FC, ReactNode, useState } from "react";

export type UserAuth = {
    name: string
    email: string
}

export const userContext = createContext({} as ContextProps)

type UserContextProviderProp = {
    children: ReactNode
}

type ContextProps = {
    user: UserAuth | null
    setUser: React.Dispatch<React.SetStateAction<UserAuth | null>>
}


export const UserContextProvider: FC<UserContextProviderProp> = ({ children }) => {
    const [user, setUser] = useState<UserAuth | null>(null)

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}
