import React from 'react'

interface LoginInputProps {
    type: string
    placeholder: string
    keyToChange: string
    setCredentials: React.Dispatch<React.SetStateAction<{ email: string; password: string }>>
    setEmailError?: React.Dispatch<React.SetStateAction<string>>
    setPasswordError?: React.Dispatch<React.SetStateAction<string>>
}

const LoginInput: React.FC<LoginInputProps> = ({ type, placeholder, keyToChange, setCredentials, setEmailError, setPasswordError }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
        <input
            type={type}
            className="outline-none rounded-md p-3 border text-slate-500"
            placeholder={placeholder}
            onChange={(e) => {
                if (keyToChange === 'email' && emailRegex.test(e.target.value)) {
                    setEmailError && setEmailError('')
                }

                if (keyToChange === 'password' && e.target.value.length > 8 && e.target.value.length < 16) {
                    setPasswordError && setPasswordError('')
                }
                setCredentials((prev) => ({
                    ...prev,
                    [keyToChange]: e.target.value,
                }))
            }}
        />
    )
}


export default LoginInput