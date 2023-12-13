import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navtitle from '../components/Navtitle'
import Map from '../components/Map'

const Layout = () => {
  return (
    <div className='flex-row bg-gray-100'>
      <header className='bg-gradient-to-b from-sky-400 to-sky-700 p-5'>
        <nav className='flex justify-between text-white'>
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:scale-110">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>
          <Link to="data">
            <Navtitle>
              Dados
            </Navtitle>
          </Link>
          <Link to="patterns">
            <Navtitle>Padrões</Navtitle>
          </Link>
          <div></div>
        </nav>
      </header>

      <Outlet />
    </div>
  )
}

export default Layout