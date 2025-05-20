"use client"
import noToLogin from "@/HOC/noToLogin";

interface AuthLayoutProps {
    children: React.ReactNode;
}


function AuthLayout({ children }: AuthLayoutProps) {

    return (
        <div className="flex justify-center items-center">
            {children}
        </div>
    );
}

export default noToLogin(AuthLayout)