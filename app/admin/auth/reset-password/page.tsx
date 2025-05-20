"use client"
import Image from "next/image";
import asset from "@/public";
import { FormEvent, useState } from "react";
import { requestAxios } from "@/api";
import { useAuth } from "@/context/authContext";
import Link from "next/link";

const ResetPassword = () => {
    const [psd1, setPsd1] = useState<string>('')
    const [psd2, setPsd2] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>('')
    const auth = useAuth()




    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!psd1 || !psd2) {
            setError("All fields are required")
            return;
        }

        if (psd1 !== psd2) {
            setError("Password must match")
            return;
        }

        if (psd1.length < 8 || psd1.length > 16) {
            setError('Password should be 8 to 16 characters');
            return;
        }

        (async function () {
            try {
                const response = await requestAxios.post('/users/auth/reset-password/',
                    JSON.stringify({ email: auth.forgetPasswordEmail, password: psd1 }))

                if (response.status === 200) {
                    const data = response.data;
                    setMessage(data.message)
                }
                auth.setForgetPasswordEmail('')
                setPsd1('')
                setPsd2('')
                setMessage('')
                setError('')
            } catch (error) {
                console.log(error)
                setError((error as any)?.response?.data?.message || 'Something went wrong try again')
            }
        }())
    }
    return (
        <div className="w-3/4 md:w-1/2 lg:w-1/3 mt-20">
            <div className="flex items-center justify-center mb-20">
                <Image src={asset.Logo} alt="ACR Logo" width={230} height={95} />
            </div>
            <h5 className="text-center uppercase font-bold mb-4">Password Reset</h5>
            <div className="bg-white rounded-sm shadow-sm p-3">
                <div className="my-4 px-5">
                    {message && <p className="text-red-500 text-center">{message}</p>}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-bold">Type Password</label>
                            <input
                                type="password"
                                className="outline-none rounded-md p-3 border"
                                placeholder="...."
                                onChange={(e) => {
                                    if (e.target.value) {
                                        setError('')
                                    }
                                    setPsd1(e.target.value)
                                }
                                }
                                value={psd1}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-bold">Re-Type Password</label>
                            <input
                                type="password"
                                className="outline-none rounded-md p-3 border"
                                placeholder="...."
                                onChange={(e) => {
                                    if (e.target.value) {
                                        setError('')
                                    }
                                    setPsd2(e.target.value)
                                }
                                }
                                value={psd2}
                            />
                        </div>
                        <div className="flex flex-col justify-end">
                            <button type="submit">Reset Password</button>
                            <Link href={'/admin/auth/forget-password'} className="text-right text-primary my-2">Start Over</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;