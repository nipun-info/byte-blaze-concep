import React from 'react'
import { Nav } from '../Components/Nav'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <div className='h-20'>
            <Nav />
        </div>
        <Outlet />
    </div>
  )
}

export default MainLayout