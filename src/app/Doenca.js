import React from 'react'
import Map from '../components/Map'
import { Outlet } from 'react-router-dom'

const Doenca = () => {
    return (
        <div className='flex p-2 gap-2'>
            <Map />
            <Outlet />
        </div>
    )
}

export default Doenca