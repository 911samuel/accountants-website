"use client"
import Image from "next/image";
import asset from "@/public";
import { FormEvent, useState } from "react";
import { useAuth } from "@/context/authContext";
import { requestAxios } from "@/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

const VerifyOtp: React.FC = () => {
    const [otp, setOtp] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>('')
    const auth = useAuth()
    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!otp) {
            setError("OTP is required")
            return;
        }

        (async function () {
            try {
                const response = await requestAxios.post('/users/auth/verify-otp/',
                    JSON.stringify({ email: auth.forgetPasswordEmail, otp: otp }))

                if (response.status === 200) {
                    const data = response.data;
                    setMessage(data.message)
                    setOtp('')
                    setError('')
                    router.push('/admin/auth/reset-password');
                }
            } catch (error) {
                console.log(error)
                setError((error as any)?.response?.data?.message || 'Something went wrong. Try again')
                return;
            }
        }())
    }
    return (
        <div className="w-3/4 md:w-1/2 lg:w-1/3 mt-20">
            <div className="flex items-center justify-center mb-20">
                <Image src={asset.Logo} alt="ACR Logo" width={230} height={95} />
            </div>
            <h5 className="text-center uppercase font-bold mb-4">Verify OTP</h5>
            <div className="bg-white rounded-sm shadow-sm p-3">
                <div className="my-4 px-5">
                    {message && <p className="text-red-500 text-center">{message}</p>}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="otp" className="font-bold">OTP</label>
                            <input
                                type="text"
                                className="outline-none rounded-md p-3 border"
                                placeholder="123456"
                                onChange={(e) => {
                                    if (e.target.value) {
                                        setError('')
                                    }
                                    setOtp(e.target.value)
                                }
                                }
                                value={otp}
                            />
                        </div>
                        <div className="flex flex-col justify-end">
                            <button type="submit">Verify OTP</button>
                            <Link href={'/admin/auth/forget-password'} className="text-right text-primary my-2">Start Over</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp;