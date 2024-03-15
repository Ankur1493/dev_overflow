import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from "@/components/shared/RightSidebar"
import Navbar from '@/components/shared/navbar/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='background-light850_dark100 relative'>
      <Navbar />
      <div className='flex'>
        <LeftSidebar />
        <section className='flex min-h-screen flex-1 flex-col'>
          <div>{children}</div>
        </section>

        <RightSidebar />
      </div>
    </main>
  )
}

export default Layout
