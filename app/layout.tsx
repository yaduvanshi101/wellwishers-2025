import type React from "react";
import "@/app/globals.css";
import {Inter} from "next/font/google";
import {Navigation} from "@/components/navigation";
import {Footer} from "@/components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Well-Wishers Agency - Software & Creative Solutions",
    description:
        "Transform your ideas into digital excellence with our expert software and creative services.",
    generator: "v0.dev",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
