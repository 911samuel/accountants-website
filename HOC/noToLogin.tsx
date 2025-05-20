"use client";
import { usePathname, useRouter } from "next/navigation"; // Use next/navigation in Next.js 13+ (app router)
import { useAuth } from "@/context/authContext";
import { useLayoutEffect, useState } from "react";
import { requestAxios } from "@/api";


const noToLogin = (WrappedComponent: any) => {

    return function AuthComponent(props: any) {
        const [loading, setLoading] = useState(true)
        const auth = useAuth()
        const pathname = usePathname()
        const router = useRouter()

        useLayoutEffect(() => {
            const checkAuth = async () => {
                try {
                    const res = await requestAxios.get("/users/getme");
                    if (res.status === 200) {
                        auth.setUser({
                          email: res.data.email,
                          firstName: res.data.first_name,
                          lastName: res.data.last_name,
                          role: res.data.role || "user",
                        });
                    }
                    alert(auth.user.email)
                    setLoading(false)
                } catch (error: any) {
                    if (error?.status === 403 || error?.status === 401) {
                        console.log("Error Here: ", error)
                        setLoading(false)
                    }
                } finally {
                    setLoading(false);
                }
            };

            checkAuth();
            if (!loading && auth.user.email && pathname.startsWith('/admin')) {
                router.push('/admin')
                router.forward()
            }
        }, [auth, loading, pathname, router]);

        if (loading) {
            return null;
        }


        if (!loading && !auth.user.email && pathname.startsWith('/admin/auth')) return <WrappedComponent {...props} />;
    };
};

export default noToLogin;
