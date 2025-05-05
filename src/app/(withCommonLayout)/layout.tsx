import Footer from '@/components/Shared/Footer/Footer'
import NavBar from '@/components/Shared/NavBar/NavBar'
import React from 'react'



const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default CommonLayout