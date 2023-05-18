import './globals.css'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import React from "react";
import MyProvider from "@/src/app/provider";

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={"min-h-screen flex flex-col"}>
        <MyProvider>
            <Navbar/>
            <div className='flex-grow'>
                {children}
            </div>
            <Footer/>
        </MyProvider>
        </body>
        </html>
    )
}
