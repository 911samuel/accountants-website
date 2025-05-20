"use client"

import Image from "next/image"


const ProfileHeader = () => {
    return (
        <div className='rounded-md p-4 border'>
            <div className='sm:flex sm:space-x-4 items-center justify-center'>
                <div className='basis-1/6 max-h-[100px] max-w-[100px]  bg-gray-400 overflow-hidden rounded-full'>
                    <Image
                        src={'/eeee.jpg'}
                        alt="User Image"
                        width={100} height={100}
                        className=" object-cover mx-auto"
                    />
                </div>
                <div className='basis-5/6  capitalize'>
                    <h3>emma netpipo</h3>
                    <div className="text-slate-400">
                        <p>Team Manager</p>
                        <p>Kigali, Rwanda</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader