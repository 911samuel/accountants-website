"use client"

import { requestAxios } from "@/api";
import { blogObject } from "@/app/admin/blog/page";
import { Dispatch, SetStateAction } from "react";

interface PaginateProps {
    total_page_items: number;
    total_pages: number;
    current_page: number;
    previous_page: number | null;
    next_page: number | null;
    requestURL: string;
    setBlogs: Dispatch<SetStateAction<blogObject>>
    setError: (value: string) => void;
}

const Paginate = ({ total_pages, current_page, requestURL, setBlogs, setError }: PaginateProps) => {

    const handleGetData = (page: number, requestURL: string) => {
        (async function () {
            try {
                const response = await requestAxios.get(`${requestURL}?page=${page}`)
                if (response.status === 200) {
                    setBlogs(response.data.data)
                }
            } catch (error: any) {
                setError(error.response?.data?.message || "Failed to fetch")
            }

        }())
    }

    return (
        <div className="flex justify-end my-5">
            {
                total_pages > 1
                && current_page !== 1
                && <button
                    className={`bg-blue-400 text-white font-medium border rounded-sm px-5 py-1 hover:bg-sky-400`}
                    onClick={() => handleGetData(current_page - 1, requestURL)}
                >
                    Prev
                </button>

            }

            <button
                className={`bg-blue-700 text-white font-medium border rounded-sm px-5 py-1 hover:bg-sky-500`}>
                {current_page}
            </button>

            {
                total_pages > 1
                && current_page !== total_pages
                && <button
                    className={`bg-blue-400 text-white font-medium border rounded-sm px-5 py-1 hover:bg-sky-400`}
                    onClick={() => handleGetData(current_page + 1, requestURL)}
                >
                    Next
                </button>
            }
        </div>
    )
}

export default Paginate