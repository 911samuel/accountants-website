"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import components from "@/components";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthRoute = pathname.startsWith("/admin")
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {!isAuthRoute && <components.Header />}
        <main>{children}</main>
        {!isAuthRoute && (
          <>
            <components.CallToAction />
            <components.Footer />
          </>
        )}
      </body>
    </html>
  );
}
