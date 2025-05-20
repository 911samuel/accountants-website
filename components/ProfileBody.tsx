"use client"
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const ProfileBody = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleUdpdateModal = () => {
        setModalOpen(prev => !prev)
    }

    const Modal = () => {
        return <div className="fixed top-20 z-30 w-2/3 bg-white rounded-md shadow-md p-5 left-1/2 -translate-x-1/2">
            <div className="flex justify-between">
                <h1 className="font-bold text-lg">Update Info </h1>
                <VscChromeClose
                    className="h-6 w-6 text-white p-2 bg-red-500 rounded-sm cursor-pointer"
                    onClick={() => handleUdpdateModal()}
                />
            </div>
            <hr />
            <div className="my-4">
                <form>
                    <div className="md:grid grid-cols-2 gap-4  space-y-2">
                        <div className="flex flex-col">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="outline-none rounded-md p-3 border text-slate-500"
                                onChange={() => { }}
                                value={''}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="outline-none rounded-md p-3 border text-slate-500"
                                onChange={() => { }}
                                value={''}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="outline-none rounded-md p-3 border text-slate-500"
                                onChange={() => { }}
                                value={''}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="outline-none rounded-md p-3 border text-slate-500"
                                onChange={() => { }}
                                value={''}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="role">Role</label>
                            <input
                                type="text"
                                className="outline-none rounded-md p-3 border text-slate-500"
                                value='user role'
                                disabled
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                className="outline-none rounded-md p-3 border text-slate-500"
                                onChange={() => { }}
                                value={''}
                            />
                        </div>
                    </div>
                    <div className="my-3 flex flex-col">
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    }

    return (
        <div className={`${modalOpen ? "h-screen fixed top-0 left-0 w-full" : ""} rounded-md p-4 border mt-4`}>
            {modalOpen && (
                <div>
                    <div
                        className="bg-black opacity-20 absolute top-0 left-0 z-30 h-screen w-full"
                        onClick={() => handleUdpdateModal()}
                    ></div>
                    <Modal />
                </div>
            )}
            {!modalOpen && (
                <div className='flex justify-between items-center mb-5'>
                    <h3>Personal Information </h3>
                    <FaRegEdit
                        className="h-10 w-10 text-white p-2 bg-green-500 rounded-sm cursor-pointer"
                        onClick={handleUdpdateModal}
                    />
                </div>
            )}
            <div className={`${modalOpen ? "h-screen opacity-5" : ""} grid grid-cols-2 space-y-3`}>
                <div>
                    <p className='text-slate-400'>First name</p>
                    <h4>Emma</h4>
                </div>
                <div>
                    <p className='text-slate-400'>Last name</p>
                    <h4>Emma</h4>
                </div>
                <div>
                    <p className='text-slate-400'>Email Address</p>
                    <h4>emma@netpipo.com</h4>
                </div>
                <div>
                    <p className='text-slate-400'>Phone</p>
                    <h4>+250785476321</h4>
                </div>
                <div>
                    <p className='text-slate-400'>Role</p>
                    <h4>Admin</h4>
                </div>
                <div>
                    <p className='text-slate-400'>Bio</p>
                    <p>This is bio</p>
                </div>
            </div>

        </div>
    )
}

export default ProfileBody