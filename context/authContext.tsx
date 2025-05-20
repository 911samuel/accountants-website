import React, { createContext, useContext, useState } from 'react';

interface UserObject {
    email: string;
    firstName: string;
    lastName: string
    role: string;
}
const AuthContext = createContext<{
    user: UserObject;
    setUser: React.Dispatch<React.SetStateAction<UserObject>>;
    forgetPasswordEmail: string;
    setForgetPasswordEmail: React.Dispatch<React.SetStateAction<string>>;
}>({
    user: { email: '', firstName: '', lastName: '', role: '' },
    setUser: () => { },
    forgetPasswordEmail: '',
    setForgetPasswordEmail: () => { }
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<UserObject>({ email: '', firstName: '', lastName: '', role: '' })
    const [forgetPasswordEmail, setForgetPasswordEmail] = useState<string>('')

    return (
        <AuthContext.Provider
            value={{ user, setUser, forgetPasswordEmail, setForgetPasswordEmail }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
