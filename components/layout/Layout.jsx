// components/layout.js

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout({ children }) {
  return (
    <>
        <div className="flex flex-col min-h-screen">
        <Navbar />
            <main className='flex-grow py-10'>{children}</main>
        <Footer />
        </div>
    </>
  )
}