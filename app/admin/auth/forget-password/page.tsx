"use client"
import Image from "next/image";
import asset from "@/public";
import { FormEvent, useState } from "react";
import { requestAxios } from "@/api";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>('')
    const auth = useAuth()
    const router = useRouter()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError("Email is required")
            return;
        }
        if (!emailRegex.test(email)) {
            setError('Invalid email');
            return;
        }

        (async function () {
            try {
                const response = await requestAxios.post('/users/auth/request-password-reset/', JSON.stringify({ email: email }))

                if (response.status === 200) {
                    const data = response.data;
                    setMessage(data.message)
                    auth.setForgetPasswordEmail(email)
                    setEmail('')
                    setError('')
                    router.push('/admin/auth/verify-otp')
                }
            } catch (error) {
                console.log(error)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setError((error as any)?.response?.data?.message || 'Something went wrong try again')
                return;
            }
        }())
    }
    return (
        <div className="w-3/4 md:w-1/2 lg:w-1/3 mt-20">
            <div className="flex items-center justify-center mb-20">
                <Image src={asset.Logo} alt="ACR Logo" width={230} height={95} />
            </div>
            <h5 className="text-center uppercase font-bold mb-4">Request Password Reset</h5>
            <div className="bg-white rounded-sm shadow-sm p-3">
                <div className="my-4 px-5">
                    {message && <p className="text-red-500 text-center">{message}</p>}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-bold">Email</label>
                            <input
                                type="text"
                                className="outline-none rounded-md p-3 border"
                                placeholder="example@gmail.com"
                                onChange={(e) => {
                                    if (e.target.value) {
                                        setError('')
                                    }
                                    setEmail(e.target.value)
                                }
                                }
                                value={email}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;