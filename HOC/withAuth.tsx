"use client";
import { useRouter } from "next/navigation"; // Use next/navigation in Next.js 13+ (app router)
import { CSSProperties, useEffect, useState } from "react";
import { requestAxios } from "@/api";
import { ClipLoader } from "react-spinners";
import { useAuth } from "@/context/authContext";

const withAuth = <Props extends object>(WrappedComponent: React.ComponentType<Props>) => {
    return function ProtectedComponent(props: Props) {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        const auth = useAuth()

    const override: CSSProperties = {
      display: "block",
      borderColor: "skyblue",
      margin: "25% 50%",
      translate: "-50% -50%",
    };

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await requestAxios.get("/users/getme", {
            withCredentials: true,
          });
          if (res.status === 200) {
            auth.setUser({
              email: res.data.email,
              firstName: res.data.first_name,
              lastName: res.data.last_name,
              role: res.data.role,
            });
          }
        } catch (error:unknown) {
            router.replace("/admin/auth/login");
            console.log(error)
        } finally {
          setLoading(false);
        }
      };

      checkAuth();
    }, [router, auth]);

    if (loading)
      return (
        <div>
          <ClipLoader
            color="#ffffff"
            loading={loading} // Fixed loading state
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      );

    if (!auth.user || !auth.user.email) return null;

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;