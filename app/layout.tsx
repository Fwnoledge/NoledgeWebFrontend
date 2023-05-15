import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"min-h-screen flex flex-col"}>
        <Navbar/>
        <div className='flex-grow'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}

